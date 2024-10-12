# DistibutionReleasesInstallAnalyticsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[DistibutionReleasesInstallAnalyticsRequestReleasesInner]**](DistibutionReleasesInstallAnalyticsRequestReleasesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.distibution_releases_install_analytics_request import DistibutionReleasesInstallAnalyticsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DistibutionReleasesInstallAnalyticsRequest from a JSON string
distibution_releases_install_analytics_request_instance = DistibutionReleasesInstallAnalyticsRequest.from_json(json)
# print the JSON string representation of the object
print(DistibutionReleasesInstallAnalyticsRequest.to_json())

# convert the object into a dict
distibution_releases_install_analytics_request_dict = distibution_releases_install_analytics_request_instance.to_dict()
# create an instance of DistibutionReleasesInstallAnalyticsRequest from a dict
distibution_releases_install_analytics_request_from_dict = DistibutionReleasesInstallAnalyticsRequest.from_dict(distibution_releases_install_analytics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


