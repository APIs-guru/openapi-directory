# MonitoringBreakdownValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_viewers** | **int** |  | [optional] 
**display_value** | **str** |  | [optional] 
**metric_value** | **float** |  | [optional] 
**negative_impact** | **int** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_breakdown_value import MonitoringBreakdownValue

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringBreakdownValue from a JSON string
monitoring_breakdown_value_instance = MonitoringBreakdownValue.from_json(json)
# print the JSON string representation of the object
print(MonitoringBreakdownValue.to_json())

# convert the object into a dict
monitoring_breakdown_value_dict = monitoring_breakdown_value_instance.to_dict()
# create an instance of MonitoringBreakdownValue from a dict
monitoring_breakdown_value_from_dict = MonitoringBreakdownValue.from_dict(monitoring_breakdown_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


