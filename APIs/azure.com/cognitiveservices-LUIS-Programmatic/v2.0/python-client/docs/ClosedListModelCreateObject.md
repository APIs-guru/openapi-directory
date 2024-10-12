# ClosedListModelCreateObject

Object model for creating a closed list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the closed list feature. | [optional] 
**sub_lists** | [**List[WordListObject]**](WordListObject.md) | Sublists for the feature. | [optional] 

## Example

```python
from openapi_client.models.closed_list_model_create_object import ClosedListModelCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ClosedListModelCreateObject from a JSON string
closed_list_model_create_object_instance = ClosedListModelCreateObject.from_json(json)
# print the JSON string representation of the object
print(ClosedListModelCreateObject.to_json())

# convert the object into a dict
closed_list_model_create_object_dict = closed_list_model_create_object_instance.to_dict()
# create an instance of ClosedListModelCreateObject from a dict
closed_list_model_create_object_from_dict = ClosedListModelCreateObject.from_dict(closed_list_model_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


