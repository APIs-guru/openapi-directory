# EntireDetectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_values** | **List[float]** | ExpectedValues contain expected value for each input point. The index of the array is consistent with the input series. | 
**is_anomaly** | **List[bool]** | IsAnomaly contains anomaly properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series. | 
**is_negative_anomaly** | **List[bool]** | IsNegativeAnomaly contains anomaly status in negative direction for each input point. True means a negative anomaly has been detected. A negative anomaly means the point is detected as an anomaly and its real value is smaller than the expected one. The index of the array is consistent with the input series. | 
**is_positive_anomaly** | **List[bool]** | IsPositiveAnomaly contain anomaly status in positive direction for each input point. True means a positive anomaly has been detected. A positive anomaly means the point is detected as an anomaly and its real value is larger than the expected one. The index of the array is consistent with the input series. | 
**lower_margins** | **List[float]** | LowerMargins contain lower margin of each input point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. Points between the boundary can be marked as normal ones in client side. The index of the array is consistent with the input series. | 
**period** | **int** | Frequency extracted from the series, zero means no recurrent pattern has been found. | 
**upper_margins** | **List[float]** | UpperMargins contain upper margin of each input point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. Anomalies in response can be filtered by upperBoundary and lowerBoundary. By adjusting marginScale value, less significant anomalies can be filtered in client side. The index of the array is consistent with the input series. | 

## Example

```python
from openapi_client.models.entire_detect_response import EntireDetectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EntireDetectResponse from a JSON string
entire_detect_response_instance = EntireDetectResponse.from_json(json)
# print the JSON string representation of the object
print(EntireDetectResponse.to_json())

# convert the object into a dict
entire_detect_response_dict = entire_detect_response_instance.to_dict()
# create an instance of EntireDetectResponse from a dict
entire_detect_response_from_dict = EntireDetectResponse.from_dict(entire_detect_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


