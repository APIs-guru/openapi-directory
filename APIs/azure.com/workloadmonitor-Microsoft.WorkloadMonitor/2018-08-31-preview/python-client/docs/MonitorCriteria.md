# MonitorCriteria

Criteria for monitor configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_operator** | **str** | Comparison enum on threshold of this criteria | [optional] [readonly] 
**health_state** | **str** | Target health state of the criteria | [optional] [readonly] 
**threshold** | **float** | Threshold value for this criteria | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitor_criteria import MonitorCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorCriteria from a JSON string
monitor_criteria_instance = MonitorCriteria.from_json(json)
# print the JSON string representation of the object
print(MonitorCriteria.to_json())

# convert the object into a dict
monitor_criteria_dict = monitor_criteria_instance.to_dict()
# create an instance of MonitorCriteria from a dict
monitor_criteria_from_dict = MonitorCriteria.from_dict(monitor_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


