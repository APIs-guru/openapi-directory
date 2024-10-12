# GoogleCloudApigeeV1ComputeEnvironmentScoresRequest

Request for ComputeEnvironmentScores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter]**](GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter.md) | Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ \&quot;scorePath\&quot;: \&quot;/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\&quot; }, { \&quot;scorePath\&quot;: \&quot;/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target\&quot;, }] This will return components with path: \&quot;/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\&quot; OR \&quot;/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target\&quot; | [optional] 
**page_size** | **int** | Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page. | [optional] 
**page_token** | **str** | Optional. A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**time_range** | [**GoogleTypeInterval**](GoogleTypeInterval.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_compute_environment_scores_request import GoogleCloudApigeeV1ComputeEnvironmentScoresRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ComputeEnvironmentScoresRequest from a JSON string
google_cloud_apigee_v1_compute_environment_scores_request_instance = GoogleCloudApigeeV1ComputeEnvironmentScoresRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ComputeEnvironmentScoresRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_compute_environment_scores_request_dict = google_cloud_apigee_v1_compute_environment_scores_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ComputeEnvironmentScoresRequest from a dict
google_cloud_apigee_v1_compute_environment_scores_request_from_dict = GoogleCloudApigeeV1ComputeEnvironmentScoresRequest.from_dict(google_cloud_apigee_v1_compute_environment_scores_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


