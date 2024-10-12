# AnalyticsDistributionReleaseCounts200ResponseCountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_group** | **str** | Distribution group queried.  | [optional] 
**release_id** | **str** |  | 
**total_count** | **int** | Total count of downloads.  | 
**unique_count** | **int** | Count of unique downloads against user id.  | 

## Example

```python
from openapi_client.models.analytics_distribution_release_counts200_response_counts_inner import AnalyticsDistributionReleaseCounts200ResponseCountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDistributionReleaseCounts200ResponseCountsInner from a JSON string
analytics_distribution_release_counts200_response_counts_inner_instance = AnalyticsDistributionReleaseCounts200ResponseCountsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDistributionReleaseCounts200ResponseCountsInner.to_json())

# convert the object into a dict
analytics_distribution_release_counts200_response_counts_inner_dict = analytics_distribution_release_counts200_response_counts_inner_instance.to_dict()
# create an instance of AnalyticsDistributionReleaseCounts200ResponseCountsInner from a dict
analytics_distribution_release_counts200_response_counts_inner_from_dict = AnalyticsDistributionReleaseCounts200ResponseCountsInner.from_dict(analytics_distribution_release_counts200_response_counts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


