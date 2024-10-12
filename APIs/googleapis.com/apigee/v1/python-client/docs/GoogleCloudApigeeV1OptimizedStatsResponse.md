# GoogleCloudApigeeV1OptimizedStatsResponse

Encapsulates a response format for JavaScript Optimized Scenario.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_unit** | **List[str]** | List of time unit values. Time unit refers to an epoch timestamp value. | [optional] 
**meta_data** | [**GoogleCloudApigeeV1Metadata**](GoogleCloudApigeeV1Metadata.md) |  | [optional] 
**result_truncated** | **bool** | Boolean flag that indicates whether the results were truncated based on the limit parameter. | [optional] 
**stats** | [**GoogleCloudApigeeV1OptimizedStatsNode**](GoogleCloudApigeeV1OptimizedStatsNode.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_optimized_stats_response import GoogleCloudApigeeV1OptimizedStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OptimizedStatsResponse from a JSON string
google_cloud_apigee_v1_optimized_stats_response_instance = GoogleCloudApigeeV1OptimizedStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OptimizedStatsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_optimized_stats_response_dict = google_cloud_apigee_v1_optimized_stats_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OptimizedStatsResponse from a dict
google_cloud_apigee_v1_optimized_stats_response_from_dict = GoogleCloudApigeeV1OptimizedStatsResponse.from_dict(google_cloud_apigee_v1_optimized_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


