# IdfaDeclarationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**IdfaDeclarationUpdateRequestData**](IdfaDeclarationUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.idfa_declaration_update_request import IdfaDeclarationUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclarationUpdateRequest from a JSON string
idfa_declaration_update_request_instance = IdfaDeclarationUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclarationUpdateRequest.to_json())

# convert the object into a dict
idfa_declaration_update_request_dict = idfa_declaration_update_request_instance.to_dict()
# create an instance of IdfaDeclarationUpdateRequest from a dict
idfa_declaration_update_request_from_dict = IdfaDeclarationUpdateRequest.from_dict(idfa_declaration_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


