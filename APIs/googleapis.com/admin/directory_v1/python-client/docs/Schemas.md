# Schemas

JSON response template for List Schema operation in Directory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#schemas']
**schemas** | [**List[ModelSchema]**](ModelSchema.md) | A list of UserSchema objects. | [optional] 

## Example

```python
from openapi_client.models.schemas import Schemas

# TODO update the JSON string below
json = "{}"
# create an instance of Schemas from a JSON string
schemas_instance = Schemas.from_json(json)
# print the JSON string representation of the object
print(Schemas.to_json())

# convert the object into a dict
schemas_dict = schemas_instance.to_dict()
# create an instance of Schemas from a dict
schemas_from_dict = Schemas.from_dict(schemas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


