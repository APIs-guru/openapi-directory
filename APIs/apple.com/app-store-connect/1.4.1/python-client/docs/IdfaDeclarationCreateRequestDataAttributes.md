# IdfaDeclarationCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes_action_with_previous_ad** | **bool** |  | 
**attributes_app_installation_to_previous_ad** | **bool** |  | 
**honors_limited_ad_tracking** | **bool** |  | 
**serves_ads** | **bool** |  | 

## Example

```python
from openapi_client.models.idfa_declaration_create_request_data_attributes import IdfaDeclarationCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclarationCreateRequestDataAttributes from a JSON string
idfa_declaration_create_request_data_attributes_instance = IdfaDeclarationCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclarationCreateRequestDataAttributes.to_json())

# convert the object into a dict
idfa_declaration_create_request_data_attributes_dict = idfa_declaration_create_request_data_attributes_instance.to_dict()
# create an instance of IdfaDeclarationCreateRequestDataAttributes from a dict
idfa_declaration_create_request_data_attributes_from_dict = IdfaDeclarationCreateRequestDataAttributes.from_dict(idfa_declaration_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


