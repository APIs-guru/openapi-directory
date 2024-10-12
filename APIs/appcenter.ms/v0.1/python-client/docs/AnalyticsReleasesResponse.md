# AnalyticsReleasesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[DistibutionReleasesInstallAnalyticsRequestReleasesInner]**](DistibutionReleasesInstallAnalyticsRequestReleasesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.analytics_releases_response import AnalyticsReleasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsReleasesResponse from a JSON string
analytics_releases_response_instance = AnalyticsReleasesResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyticsReleasesResponse.to_json())

# convert the object into a dict
analytics_releases_response_dict = analytics_releases_response_instance.to_dict()
# create an instance of AnalyticsReleasesResponse from a dict
analytics_releases_response_from_dict = AnalyticsReleasesResponse.from_dict(analytics_releases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


