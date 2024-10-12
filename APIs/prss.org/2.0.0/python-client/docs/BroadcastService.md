# BroadcastService

A broadcast service that can subscribe to content for multiple destinations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | The date the broadcast service was created. | 
**description** | **str** | The description of the broadcast service. | [optional] 
**id** | **int** | The ID of the broadcast service. | 
**last_modified_date** | **datetime** | The date the broadcast service was last modified. | 
**name** | **str** | The name of the broadcast service. | 

## Example

```python
from openapi_client.models.broadcast_service import BroadcastService

# TODO update the JSON string below
json = "{}"
# create an instance of BroadcastService from a JSON string
broadcast_service_instance = BroadcastService.from_json(json)
# print the JSON string representation of the object
print(BroadcastService.to_json())

# convert the object into a dict
broadcast_service_dict = broadcast_service_instance.to_dict()
# create an instance of BroadcastService from a dict
broadcast_service_from_dict = BroadcastService.from_dict(broadcast_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


