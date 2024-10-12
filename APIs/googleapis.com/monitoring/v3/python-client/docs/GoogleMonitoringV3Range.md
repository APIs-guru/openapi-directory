# GoogleMonitoringV3Range

Range of numerical values within min and max.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **float** | Range maximum. | [optional] 
**min** | **float** | Range minimum. | [optional] 

## Example

```python
from openapi_client.models.google_monitoring_v3_range import GoogleMonitoringV3Range

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMonitoringV3Range from a JSON string
google_monitoring_v3_range_instance = GoogleMonitoringV3Range.from_json(json)
# print the JSON string representation of the object
print(GoogleMonitoringV3Range.to_json())

# convert the object into a dict
google_monitoring_v3_range_dict = google_monitoring_v3_range_instance.to_dict()
# create an instance of GoogleMonitoringV3Range from a dict
google_monitoring_v3_range_from_dict = GoogleMonitoringV3Range.from_dict(google_monitoring_v3_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


