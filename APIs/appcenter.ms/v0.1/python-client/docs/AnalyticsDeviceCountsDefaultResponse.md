# AnalyticsDeviceCountsDefaultResponse

Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AnalyticsDeviceCountsDefaultResponseError**](AnalyticsDeviceCountsDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.analytics_device_counts_default_response import AnalyticsDeviceCountsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDeviceCountsDefaultResponse from a JSON string
analytics_device_counts_default_response_instance = AnalyticsDeviceCountsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDeviceCountsDefaultResponse.to_json())

# convert the object into a dict
analytics_device_counts_default_response_dict = analytics_device_counts_default_response_instance.to_dict()
# create an instance of AnalyticsDeviceCountsDefaultResponse from a dict
analytics_device_counts_default_response_from_dict = AnalyticsDeviceCountsDefaultResponse.from_dict(analytics_device_counts_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


