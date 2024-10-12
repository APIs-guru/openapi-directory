# TimeTrackingConfiguration

Details of the time tracking configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_unit** | **str** | The default unit of time applied to logged time. | 
**time_format** | **str** | The format that will appear on an issue&#39;s *Time Spent* field. | 
**working_days_per_week** | **float** | The number of days in a working week. | 
**working_hours_per_day** | **float** | The number of hours in a working day. | 

## Example

```python
from openapi_client.models.time_tracking_configuration import TimeTrackingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of TimeTrackingConfiguration from a JSON string
time_tracking_configuration_instance = TimeTrackingConfiguration.from_json(json)
# print the JSON string representation of the object
print(TimeTrackingConfiguration.to_json())

# convert the object into a dict
time_tracking_configuration_dict = time_tracking_configuration_instance.to_dict()
# create an instance of TimeTrackingConfiguration from a dict
time_tracking_configuration_from_dict = TimeTrackingConfiguration.from_dict(time_tracking_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


