# WritablePowerFeed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**amperage** | **int** |  | [optional] 
**cable** | [**NestedCable**](NestedCable.md) |  | [optional] 
**cable_end** | **str** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**connected_endpoints** | **List[Optional[str]]** |  Return the appropriate serializer for the type of connected object.  | [optional] [readonly] 
**connected_endpoints_reachable** | **bool** |  | [optional] [readonly] 
**connected_endpoints_type** | **str** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_peers** | **List[Optional[str]]** |  Return the appropriate serializer for the link termination model.  | [optional] [readonly] 
**link_peers_type** | **str** |  | [optional] [readonly] 
**mark_connected** | **bool** | Treat as if a cable is connected | [optional] 
**max_utilization** | **int** | Maximum permissible draw (percentage) | [optional] 
**name** | **str** |  | 
**phase** | **str** |  | [optional] 
**power_panel** | **int** |  | 
**rack** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**supply** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**voltage** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_power_feed import WritablePowerFeed

# TODO update the JSON string below
json = "{}"
# create an instance of WritablePowerFeed from a JSON string
writable_power_feed_instance = WritablePowerFeed.from_json(json)
# print the JSON string representation of the object
print(WritablePowerFeed.to_json())

# convert the object into a dict
writable_power_feed_dict = writable_power_feed_instance.to_dict()
# create an instance of WritablePowerFeed from a dict
writable_power_feed_from_dict = WritablePowerFeed.from_dict(writable_power_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


