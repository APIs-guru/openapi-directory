# ReactionsListSchemaItemsInnerInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**message** | [**ObjsMessage**](ObjsMessage.md) |  | 
**type** | **str** |  | 
**file** | [**ObjsFile**](ObjsFile.md) |  | 
**comment** | [**ObjsComment**](ObjsComment.md) |  | 

## Example

```python
from openapi_client.models.reactions_list_schema_items_inner_inner import ReactionsListSchemaItemsInnerInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionsListSchemaItemsInnerInner from a JSON string
reactions_list_schema_items_inner_inner_instance = ReactionsListSchemaItemsInnerInner.from_json(json)
# print the JSON string representation of the object
print(ReactionsListSchemaItemsInnerInner.to_json())

# convert the object into a dict
reactions_list_schema_items_inner_inner_dict = reactions_list_schema_items_inner_inner_instance.to_dict()
# create an instance of ReactionsListSchemaItemsInnerInner from a dict
reactions_list_schema_items_inner_inner_from_dict = ReactionsListSchemaItemsInnerInner.from_dict(reactions_list_schema_items_inner_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


