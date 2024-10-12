# IdfaDeclarationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes_action_with_previous_ad** | **bool** |  | [optional] 
**attributes_app_installation_to_previous_ad** | **bool** |  | [optional] 
**honors_limited_ad_tracking** | **bool** |  | [optional] 
**serves_ads** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.idfa_declaration_attributes import IdfaDeclarationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclarationAttributes from a JSON string
idfa_declaration_attributes_instance = IdfaDeclarationAttributes.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclarationAttributes.to_json())

# convert the object into a dict
idfa_declaration_attributes_dict = idfa_declaration_attributes_instance.to_dict()
# create an instance of IdfaDeclarationAttributes from a dict
idfa_declaration_attributes_from_dict = IdfaDeclarationAttributes.from_dict(idfa_declaration_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


