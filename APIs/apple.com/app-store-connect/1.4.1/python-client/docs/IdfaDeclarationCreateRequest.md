# IdfaDeclarationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**IdfaDeclarationCreateRequestData**](IdfaDeclarationCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.idfa_declaration_create_request import IdfaDeclarationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclarationCreateRequest from a JSON string
idfa_declaration_create_request_instance = IdfaDeclarationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclarationCreateRequest.to_json())

# convert the object into a dict
idfa_declaration_create_request_dict = idfa_declaration_create_request_instance.to_dict()
# create an instance of IdfaDeclarationCreateRequest from a dict
idfa_declaration_create_request_from_dict = IdfaDeclarationCreateRequest.from_dict(idfa_declaration_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


