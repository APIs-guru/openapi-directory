# ClosedListModelUpdateObject

Object model for updating a closed list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The new name of the closed list feature. | [optional] 
**sub_lists** | [**List[WordListObject]**](WordListObject.md) | The new sublists for the feature. | [optional] 

## Example

```python
from openapi_client.models.closed_list_model_update_object import ClosedListModelUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ClosedListModelUpdateObject from a JSON string
closed_list_model_update_object_instance = ClosedListModelUpdateObject.from_json(json)
# print the JSON string representation of the object
print(ClosedListModelUpdateObject.to_json())

# convert the object into a dict
closed_list_model_update_object_dict = closed_list_model_update_object_instance.to_dict()
# create an instance of ClosedListModelUpdateObject from a dict
closed_list_model_update_object_from_dict = ClosedListModelUpdateObject.from_dict(closed_list_model_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


