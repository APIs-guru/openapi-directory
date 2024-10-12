# SBQueue

Description of queue Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SBQueueProperties**](SBQueueProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_queue import SBQueue

# TODO update the JSON string below
json = "{}"
# create an instance of SBQueue from a JSON string
sb_queue_instance = SBQueue.from_json(json)
# print the JSON string representation of the object
print(SBQueue.to_json())

# convert the object into a dict
sb_queue_dict = sb_queue_instance.to_dict()
# create an instance of SBQueue from a dict
sb_queue_from_dict = SBQueue.from_dict(sb_queue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


