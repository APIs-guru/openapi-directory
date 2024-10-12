# GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter

Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_path** | **str** | Optional. Return scores for this component. Example: \&quot;/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_compute_environment_scores_request_filter import GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter from a JSON string
google_cloud_apigee_v1_compute_environment_scores_request_filter_instance = GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter.to_json())

# convert the object into a dict
google_cloud_apigee_v1_compute_environment_scores_request_filter_dict = google_cloud_apigee_v1_compute_environment_scores_request_filter_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter from a dict
google_cloud_apigee_v1_compute_environment_scores_request_filter_from_dict = GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter.from_dict(google_cloud_apigee_v1_compute_environment_scores_request_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


