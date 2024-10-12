# PinsListSuccessSchemaInnerAnyOfItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** |  | [optional] 
**created_by** | **str** |  | [optional] 
**file** | [**ObjsFile**](ObjsFile.md) |  | [optional] 
**type** | **str** |  | [optional] 
**channel** | **str** |  | [optional] 
**message** | [**ObjsMessage**](ObjsMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.pins_list_success_schema_inner_any_of_items_inner import PinsListSuccessSchemaInnerAnyOfItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PinsListSuccessSchemaInnerAnyOfItemsInner from a JSON string
pins_list_success_schema_inner_any_of_items_inner_instance = PinsListSuccessSchemaInnerAnyOfItemsInner.from_json(json)
# print the JSON string representation of the object
print(PinsListSuccessSchemaInnerAnyOfItemsInner.to_json())

# convert the object into a dict
pins_list_success_schema_inner_any_of_items_inner_dict = pins_list_success_schema_inner_any_of_items_inner_instance.to_dict()
# create an instance of PinsListSuccessSchemaInnerAnyOfItemsInner from a dict
pins_list_success_schema_inner_any_of_items_inner_from_dict = PinsListSuccessSchemaInnerAnyOfItemsInner.from_dict(pins_list_success_schema_inner_any_of_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


