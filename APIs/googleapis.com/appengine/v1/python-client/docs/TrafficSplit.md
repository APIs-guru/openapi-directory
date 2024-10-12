# TrafficSplit

Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocations** | **Dict[str, float]** | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. | [optional] 
**shard_by** | **str** | Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed. | [optional] 

## Example

```python
from openapi_client.models.traffic_split import TrafficSplit

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficSplit from a JSON string
traffic_split_instance = TrafficSplit.from_json(json)
# print the JSON string representation of the object
print(TrafficSplit.to_json())

# convert the object into a dict
traffic_split_dict = traffic_split_instance.to_dict()
# create an instance of TrafficSplit from a dict
traffic_split_from_dict = TrafficSplit.from_dict(traffic_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


