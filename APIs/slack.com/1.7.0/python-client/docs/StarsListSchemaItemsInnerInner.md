# StarsListSchemaItemsInnerInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | 
**date_create** | **int** |  | 
**message** | [**ObjsMessage**](ObjsMessage.md) |  | 
**type** | **str** |  | 
**file** | [**ObjsFile**](ObjsFile.md) |  | 
**comment** | [**ObjsComment**](ObjsComment.md) |  | 

## Example

```python
from openapi_client.models.stars_list_schema_items_inner_inner import StarsListSchemaItemsInnerInner

# TODO update the JSON string below
json = "{}"
# create an instance of StarsListSchemaItemsInnerInner from a JSON string
stars_list_schema_items_inner_inner_instance = StarsListSchemaItemsInnerInner.from_json(json)
# print the JSON string representation of the object
print(StarsListSchemaItemsInnerInner.to_json())

# convert the object into a dict
stars_list_schema_items_inner_inner_dict = stars_list_schema_items_inner_inner_instance.to_dict()
# create an instance of StarsListSchemaItemsInnerInner from a dict
stars_list_schema_items_inner_inner_from_dict = StarsListSchemaItemsInnerInner.from_dict(stars_list_schema_items_inner_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


