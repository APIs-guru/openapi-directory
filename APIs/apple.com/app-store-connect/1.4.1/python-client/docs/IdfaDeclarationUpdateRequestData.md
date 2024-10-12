# IdfaDeclarationUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**IdfaDeclarationAttributes**](IdfaDeclarationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.idfa_declaration_update_request_data import IdfaDeclarationUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclarationUpdateRequestData from a JSON string
idfa_declaration_update_request_data_instance = IdfaDeclarationUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclarationUpdateRequestData.to_json())

# convert the object into a dict
idfa_declaration_update_request_data_dict = idfa_declaration_update_request_data_instance.to_dict()
# create an instance of IdfaDeclarationUpdateRequestData from a dict
idfa_declaration_update_request_data_from_dict = IdfaDeclarationUpdateRequestData.from_dict(idfa_declaration_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


