# GoogleCloudAiplatformV1Candidate

A response candidate generated from the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**citation_metadata** | [**GoogleCloudAiplatformV1CitationMetadata**](GoogleCloudAiplatformV1CitationMetadata.md) |  | [optional] 
**content** | [**GoogleCloudAiplatformV1Content**](GoogleCloudAiplatformV1Content.md) |  | [optional] 
**finish_message** | **str** | Output only. Describes the reason the mode stopped generating tokens in more detail. This is only filled when &#x60;finish_reason&#x60; is set. | [optional] [readonly] 
**finish_reason** | **str** | Output only. The reason why the model stopped generating tokens. If empty, the model has not stopped generating the tokens. | [optional] [readonly] 
**grounding_metadata** | [**GoogleCloudAiplatformV1GroundingMetadata**](GoogleCloudAiplatformV1GroundingMetadata.md) |  | [optional] 
**index** | **int** | Output only. Index of the candidate. | [optional] [readonly] 
**safety_ratings** | [**List[GoogleCloudAiplatformV1SafetyRating]**](GoogleCloudAiplatformV1SafetyRating.md) | Output only. List of ratings for the safety of a response candidate. There is at most one rating per category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_candidate import GoogleCloudAiplatformV1Candidate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Candidate from a JSON string
google_cloud_aiplatform_v1_candidate_instance = GoogleCloudAiplatformV1Candidate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Candidate.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_candidate_dict = google_cloud_aiplatform_v1_candidate_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Candidate from a dict
google_cloud_aiplatform_v1_candidate_from_dict = GoogleCloudAiplatformV1Candidate.from_dict(google_cloud_aiplatform_v1_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


