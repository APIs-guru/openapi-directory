# AnalyticsDeviceCountsDefaultResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The status code return by the API. It can be 400 or 403 or 500. | [optional] 
**message** | **str** | The reason for the request failed. | [optional] 

## Example

```python
from openapi_client.models.analytics_device_counts_default_response_error import AnalyticsDeviceCountsDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDeviceCountsDefaultResponseError from a JSON string
analytics_device_counts_default_response_error_instance = AnalyticsDeviceCountsDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDeviceCountsDefaultResponseError.to_json())

# convert the object into a dict
analytics_device_counts_default_response_error_dict = analytics_device_counts_default_response_error_instance.to_dict()
# create an instance of AnalyticsDeviceCountsDefaultResponseError from a dict
analytics_device_counts_default_response_error_from_dict = AnalyticsDeviceCountsDefaultResponseError.from_dict(analytics_device_counts_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


