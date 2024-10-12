# AnalyticsOperatingSystemCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oses** | [**List[AnalyticsOperatingSystemCounts200ResponseOsesInner]**](AnalyticsOperatingSystemCounts200ResponseOsesInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_operating_system_counts200_response import AnalyticsOperatingSystemCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsOperatingSystemCounts200Response from a JSON string
analytics_operating_system_counts200_response_instance = AnalyticsOperatingSystemCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsOperatingSystemCounts200Response.to_json())

# convert the object into a dict
analytics_operating_system_counts200_response_dict = analytics_operating_system_counts200_response_instance.to_dict()
# create an instance of AnalyticsOperatingSystemCounts200Response from a dict
analytics_operating_system_counts200_response_from_dict = AnalyticsOperatingSystemCounts200Response.from_dict(analytics_operating_system_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


