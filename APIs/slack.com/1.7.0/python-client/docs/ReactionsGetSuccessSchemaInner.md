# ReactionsGetSuccessSchemaInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**message** | [**ObjsMessage**](ObjsMessage.md) |  | 
**ok** | **bool** |  | 
**type** | **str** |  | 
**file** | [**ObjsFile**](ObjsFile.md) |  | 
**comment** | [**ObjsComment**](ObjsComment.md) |  | 

## Example

```python
from openapi_client.models.reactions_get_success_schema_inner import ReactionsGetSuccessSchemaInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionsGetSuccessSchemaInner from a JSON string
reactions_get_success_schema_inner_instance = ReactionsGetSuccessSchemaInner.from_json(json)
# print the JSON string representation of the object
print(ReactionsGetSuccessSchemaInner.to_json())

# convert the object into a dict
reactions_get_success_schema_inner_dict = reactions_get_success_schema_inner_instance.to_dict()
# create an instance of ReactionsGetSuccessSchemaInner from a dict
reactions_get_success_schema_inner_from_dict = ReactionsGetSuccessSchemaInner.from_dict(reactions_get_success_schema_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


