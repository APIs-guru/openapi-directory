# LastDetectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_value** | **float** | Expected value of the latest point. | [optional] 
**is_anomaly** | **bool** | Anomaly status of the latest point, true means the latest point is an anomaly either in negative direction or positive direction. | [optional] 
**is_negative_anomaly** | **bool** | Anomaly status in negative direction of the latest point. True means the latest point is an anomaly and its real value is smaller than the expected one. | [optional] 
**is_positive_anomaly** | **bool** | Anomaly status in positive direction of the latest point. True means the latest point is an anomaly and its real value is larger than the expected one. | [optional] 
**lower_margin** | **float** | Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - sensitivity)*lowerMargin.  | [optional] 
**period** | **int** | Frequency extracted from the series, zero means no recurrent pattern has been found. | [optional] 
**suggested_window** | **int** | Suggested input series points needed for detecting the latest point. | [optional] 
**upper_margin** | **float** | Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - sensitivity)*upperMargin. If the value of latest point is between upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting sensitivity value, anomaly status of latest point can be changed. | [optional] 

## Example

```python
from openapi_client.models.last_detect_response import LastDetectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LastDetectResponse from a JSON string
last_detect_response_instance = LastDetectResponse.from_json(json)
# print the JSON string representation of the object
print(LastDetectResponse.to_json())

# convert the object into a dict
last_detect_response_dict = last_detect_response_instance.to_dict()
# create an instance of LastDetectResponse from a dict
last_detect_response_from_dict = LastDetectResponse.from_dict(last_detect_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


