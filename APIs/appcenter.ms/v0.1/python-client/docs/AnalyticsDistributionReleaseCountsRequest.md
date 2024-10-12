# AnalyticsDistributionReleaseCountsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[AnalyticsDistributionReleaseCountsRequestReleasesInner]**](AnalyticsDistributionReleaseCountsRequestReleasesInner.md) |  | 

## Example

```python
from openapi_client.models.analytics_distribution_release_counts_request import AnalyticsDistributionReleaseCountsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDistributionReleaseCountsRequest from a JSON string
analytics_distribution_release_counts_request_instance = AnalyticsDistributionReleaseCountsRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDistributionReleaseCountsRequest.to_json())

# convert the object into a dict
analytics_distribution_release_counts_request_dict = analytics_distribution_release_counts_request_instance.to_dict()
# create an instance of AnalyticsDistributionReleaseCountsRequest from a dict
analytics_distribution_release_counts_request_from_dict = AnalyticsDistributionReleaseCountsRequest.from_dict(analytics_distribution_release_counts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


