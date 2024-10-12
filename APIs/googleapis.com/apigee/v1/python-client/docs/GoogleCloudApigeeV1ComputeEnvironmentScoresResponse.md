# GoogleCloudApigeeV1ComputeEnvironmentScoresResponse

Response for ComputeEnvironmentScores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A page token, received from a previous &#x60;ComputeScore&#x60; call. Provide this to retrieve the subsequent page. | [optional] 
**scores** | [**List[GoogleCloudApigeeV1Score]**](GoogleCloudApigeeV1Score.md) | List of scores. One score per day. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_compute_environment_scores_response import GoogleCloudApigeeV1ComputeEnvironmentScoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ComputeEnvironmentScoresResponse from a JSON string
google_cloud_apigee_v1_compute_environment_scores_response_instance = GoogleCloudApigeeV1ComputeEnvironmentScoresResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ComputeEnvironmentScoresResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_compute_environment_scores_response_dict = google_cloud_apigee_v1_compute_environment_scores_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ComputeEnvironmentScoresResponse from a dict
google_cloud_apigee_v1_compute_environment_scores_response_from_dict = GoogleCloudApigeeV1ComputeEnvironmentScoresResponse.from_dict(google_cloud_apigee_v1_compute_environment_scores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


