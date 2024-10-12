# AnalyticsDistributionReleaseCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[AnalyticsDistributionReleaseCounts200ResponseCountsInner]**](AnalyticsDistributionReleaseCounts200ResponseCountsInner.md) |  | 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_distribution_release_counts200_response import AnalyticsDistributionReleaseCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDistributionReleaseCounts200Response from a JSON string
analytics_distribution_release_counts200_response_instance = AnalyticsDistributionReleaseCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDistributionReleaseCounts200Response.to_json())

# convert the object into a dict
analytics_distribution_release_counts200_response_dict = analytics_distribution_release_counts200_response_instance.to_dict()
# create an instance of AnalyticsDistributionReleaseCounts200Response from a dict
analytics_distribution_release_counts200_response_from_dict = AnalyticsDistributionReleaseCounts200Response.from_dict(analytics_distribution_release_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


