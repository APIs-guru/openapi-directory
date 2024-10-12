# ActivityDeclarationDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**declaration** | **str** |  | [optional] 
**declaration_description** | **str** |  | [optional] 
**language** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.activity_declaration_dto import ActivityDeclarationDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityDeclarationDTO from a JSON string
activity_declaration_dto_instance = ActivityDeclarationDTO.from_json(json)
# print the JSON string representation of the object
print(ActivityDeclarationDTO.to_json())

# convert the object into a dict
activity_declaration_dto_dict = activity_declaration_dto_instance.to_dict()
# create an instance of ActivityDeclarationDTO from a dict
activity_declaration_dto_from_dict = ActivityDeclarationDTO.from_dict(activity_declaration_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


