# ErrorFreeDevicePercentages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_percentage** | **float** | Average percentage | [optional] 
**daily_percentages** | [**List[ErrorsGroupErrorFreeDevicePercentages200ResponseDailyPercentagesInner]**](ErrorsGroupErrorFreeDevicePercentages200ResponseDailyPercentagesInner.md) | The error-free percentage per day. | [optional] 

## Example

```python
from openapi_client.models.error_free_device_percentages import ErrorFreeDevicePercentages

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorFreeDevicePercentages from a JSON string
error_free_device_percentages_instance = ErrorFreeDevicePercentages.from_json(json)
# print the JSON string representation of the object
print(ErrorFreeDevicePercentages.to_json())

# convert the object into a dict
error_free_device_percentages_dict = error_free_device_percentages_instance.to_dict()
# create an instance of ErrorFreeDevicePercentages from a dict
error_free_device_percentages_from_dict = ErrorFreeDevicePercentages.from_dict(error_free_device_percentages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


