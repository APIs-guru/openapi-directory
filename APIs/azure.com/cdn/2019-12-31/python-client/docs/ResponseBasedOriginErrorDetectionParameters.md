# ResponseBasedOriginErrorDetectionParameters

The JSON object that contains the properties to determine origin health using real requests/responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_error_ranges** | [**List[HttpErrorRangeParameters]**](HttpErrorRangeParameters.md) | The list of Http status code ranges that are considered as server errors for origin and it is marked as unhealthy. | [optional] 
**response_based_detected_error_types** | **str** | Type of response errors for real user requests for which origin will be deemed unhealthy | [optional] 
**response_based_failover_threshold_percentage** | **int** | The percentage of failed requests in the sample where failover should trigger. | [optional] 

## Example

```python
from openapi_client.models.response_based_origin_error_detection_parameters import ResponseBasedOriginErrorDetectionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseBasedOriginErrorDetectionParameters from a JSON string
response_based_origin_error_detection_parameters_instance = ResponseBasedOriginErrorDetectionParameters.from_json(json)
# print the JSON string representation of the object
print(ResponseBasedOriginErrorDetectionParameters.to_json())

# convert the object into a dict
response_based_origin_error_detection_parameters_dict = response_based_origin_error_detection_parameters_instance.to_dict()
# create an instance of ResponseBasedOriginErrorDetectionParameters from a dict
response_based_origin_error_detection_parameters_from_dict = ResponseBasedOriginErrorDetectionParameters.from_dict(response_based_origin_error_detection_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


