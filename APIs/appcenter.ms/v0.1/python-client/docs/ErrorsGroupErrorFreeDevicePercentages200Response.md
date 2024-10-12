# ErrorsGroupErrorFreeDevicePercentages200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_percentage** | **float** | Average percentage | [optional] 
**daily_percentages** | [**List[ErrorsGroupErrorFreeDevicePercentages200ResponseDailyPercentagesInner]**](ErrorsGroupErrorFreeDevicePercentages200ResponseDailyPercentagesInner.md) | The error-free percentage per day. | [optional] 

## Example

```python
from openapi_client.models.errors_group_error_free_device_percentages200_response import ErrorsGroupErrorFreeDevicePercentages200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsGroupErrorFreeDevicePercentages200Response from a JSON string
errors_group_error_free_device_percentages200_response_instance = ErrorsGroupErrorFreeDevicePercentages200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsGroupErrorFreeDevicePercentages200Response.to_json())

# convert the object into a dict
errors_group_error_free_device_percentages200_response_dict = errors_group_error_free_device_percentages200_response_instance.to_dict()
# create an instance of ErrorsGroupErrorFreeDevicePercentages200Response from a dict
errors_group_error_free_device_percentages200_response_from_dict = ErrorsGroupErrorFreeDevicePercentages200Response.from_dict(errors_group_error_free_device_percentages200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


