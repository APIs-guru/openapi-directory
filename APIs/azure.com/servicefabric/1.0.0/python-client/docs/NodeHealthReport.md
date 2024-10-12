# NodeHealthReport

The report of the node health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**var_property** | **str** |  | [optional] 
**remove_when_expired** | **bool** |  | [optional] 
**sequence_number** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 
**time_to_live_in_milli_seconds** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.node_health_report import NodeHealthReport

# TODO update the JSON string below
json = "{}"
# create an instance of NodeHealthReport from a JSON string
node_health_report_instance = NodeHealthReport.from_json(json)
# print the JSON string representation of the object
print(NodeHealthReport.to_json())

# convert the object into a dict
node_health_report_dict = node_health_report_instance.to_dict()
# create an instance of NodeHealthReport from a dict
node_health_report_from_dict = NodeHealthReport.from_dict(node_health_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


