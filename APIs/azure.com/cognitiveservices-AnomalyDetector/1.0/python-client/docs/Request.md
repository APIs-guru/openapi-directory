# Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_interval** | **int** | Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {\&quot;granularity\&quot;:\&quot;minutely\&quot;, \&quot;customInterval\&quot;:5}. | [optional] 
**granularity** | [**Granularity**](Granularity.md) |  | 
**max_anomaly_ratio** | **float** | Optional argument, advanced model parameter, max anomaly ratio in a time series. | [optional] 
**period** | **int** | Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically. | [optional] 
**sensitivity** | **int** | Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger the margin value will be which means less anomalies will be accepted. | [optional] 
**series** | [**List[Point]**](Point.md) | Time series data points. Points should be sorted by timestamp in ascending order to match the anomaly detection result. If the data is not sorted correctly or there is duplicated timestamp, the API will not work. In such case, an error message will be returned. | 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


