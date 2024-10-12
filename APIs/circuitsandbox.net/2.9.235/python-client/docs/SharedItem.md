# SharedItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_id** | **str** | The Id of the container | [optional] 
**container_name** | **str** | Name of the container | [optional] 
**container_type** | **str** | Type of the container | [optional] 
**creation_time** | **float** | The time this Item has been created | [optional] 
**creator_id** | **str** | The Id of the creator | [optional] 
**item_id** | **str** | Id of the item | [optional] 
**parent_topic_id** | **str** | The Id of the parent topic | [optional] 
**sub_type** | **str** | The subtype | [optional] 

## Example

```python
from openapi_client.models.shared_item import SharedItem

# TODO update the JSON string below
json = "{}"
# create an instance of SharedItem from a JSON string
shared_item_instance = SharedItem.from_json(json)
# print the JSON string representation of the object
print(SharedItem.to_json())

# convert the object into a dict
shared_item_dict = shared_item_instance.to_dict()
# create an instance of SharedItem from a dict
shared_item_from_dict = SharedItem.from_dict(shared_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


