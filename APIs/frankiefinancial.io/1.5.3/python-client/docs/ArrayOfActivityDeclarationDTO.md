# ArrayOfActivityDeclarationDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_declaration_dto** | [**List[ActivityDeclarationDTO]**](ActivityDeclarationDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_of_activity_declaration_dto import ArrayOfActivityDeclarationDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayOfActivityDeclarationDTO from a JSON string
array_of_activity_declaration_dto_instance = ArrayOfActivityDeclarationDTO.from_json(json)
# print the JSON string representation of the object
print(ArrayOfActivityDeclarationDTO.to_json())

# convert the object into a dict
array_of_activity_declaration_dto_dict = array_of_activity_declaration_dto_instance.to_dict()
# create an instance of ArrayOfActivityDeclarationDTO from a dict
array_of_activity_declaration_dto_from_dict = ArrayOfActivityDeclarationDTO.from_dict(array_of_activity_declaration_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


