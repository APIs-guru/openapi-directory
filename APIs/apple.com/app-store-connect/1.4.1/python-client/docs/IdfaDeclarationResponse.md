# IdfaDeclarationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**IdfaDeclaration**](IdfaDeclaration.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.idfa_declaration_response import IdfaDeclarationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclarationResponse from a JSON string
idfa_declaration_response_instance = IdfaDeclarationResponse.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclarationResponse.to_json())

# convert the object into a dict
idfa_declaration_response_dict = idfa_declaration_response_instance.to_dict()
# create an instance of IdfaDeclarationResponse from a dict
idfa_declaration_response_from_dict = IdfaDeclarationResponse.from_dict(idfa_declaration_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


