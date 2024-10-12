# AnalyticsDistributionReleaseCountsRequestReleasesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_group** | **str** | Distribution group Id.  | [optional] 
**release** | **str** | Release Id.  | 

## Example

```python
from openapi_client.models.analytics_distribution_release_counts_request_releases_inner import AnalyticsDistributionReleaseCountsRequestReleasesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDistributionReleaseCountsRequestReleasesInner from a JSON string
analytics_distribution_release_counts_request_releases_inner_instance = AnalyticsDistributionReleaseCountsRequestReleasesInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDistributionReleaseCountsRequestReleasesInner.to_json())

# convert the object into a dict
analytics_distribution_release_counts_request_releases_inner_dict = analytics_distribution_release_counts_request_releases_inner_instance.to_dict()
# create an instance of AnalyticsDistributionReleaseCountsRequestReleasesInner from a dict
analytics_distribution_release_counts_request_releases_inner_from_dict = AnalyticsDistributionReleaseCountsRequestReleasesInner.from_dict(analytics_distribution_release_counts_request_releases_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


