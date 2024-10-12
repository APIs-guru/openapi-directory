# PowerFeed


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
**phase** | [**Phase**](Phase.md) |  | [optional] 
**power_panel** | [**NestedPowerPanel**](NestedPowerPanel.md) |  | 
**rack** | [**NestedRack**](NestedRack.md) |  | [optional] 
**status** | [**Status9**](Status9.md) |  | [optional] 
**supply** | [**Supply**](Supply.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**type** | [**Type5**](Type5.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**voltage** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.power_feed import PowerFeed

# TODO update the JSON string below
json = "{}"
# create an instance of PowerFeed from a JSON string
power_feed_instance = PowerFeed.from_json(json)
# print the JSON string representation of the object
print(PowerFeed.to_json())

# convert the object into a dict
power_feed_dict = power_feed_instance.to_dict()
# create an instance of PowerFeed from a dict
power_feed_from_dict = PowerFeed.from_dict(power_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


