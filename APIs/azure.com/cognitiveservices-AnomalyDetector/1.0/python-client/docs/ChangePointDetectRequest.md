# ChangePointDetectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_interval** | **int** | Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {\&quot;granularity\&quot;:\&quot;minutely\&quot;, \&quot;customInterval\&quot;:5}. | [optional] 
**granularity** | [**Granularity**](Granularity.md) |  | 
**period** | **int** | Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically. | [optional] 
**series** | [**List[Point]**](Point.md) | Time series data points. Points should be sorted by timestamp in ascending order to match the change point detection result. | 
**stable_trend_window** | **int** | Optional argument, advanced model parameter, a default stableTrendWindow will be used in detection. | [optional] 
**threshold** | **float** | Optional argument, advanced model parameter, between 0.0-1.0, the lower the value is, the larger the trend error will be which means less change point will be accepted. | [optional] 

## Example

```python
from openapi_client.models.change_point_detect_request import ChangePointDetectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePointDetectRequest from a JSON string
change_point_detect_request_instance = ChangePointDetectRequest.from_json(json)
# print the JSON string representation of the object
print(ChangePointDetectRequest.to_json())

# convert the object into a dict
change_point_detect_request_dict = change_point_detect_request_instance.to_dict()
# create an instance of ChangePointDetectRequest from a dict
change_point_detect_request_from_dict = ChangePointDetectRequest.from_dict(change_point_detect_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


