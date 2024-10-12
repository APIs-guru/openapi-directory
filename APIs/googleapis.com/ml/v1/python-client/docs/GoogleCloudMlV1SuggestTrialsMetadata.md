# GoogleCloudMlV1SuggestTrialsMetadata

Metadata field of a google.longrunning.Operation associated with a SuggestTrialsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The identifier of the client that is requesting the suggestion. | [optional] 
**create_time** | **str** | The time operation was submitted. | [optional] 
**study** | **str** | The name of the study that the trial belongs to. | [optional] 
**suggestion_count** | **int** | The number of suggestions requested. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_suggest_trials_metadata import GoogleCloudMlV1SuggestTrialsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1SuggestTrialsMetadata from a JSON string
google_cloud_ml_v1_suggest_trials_metadata_instance = GoogleCloudMlV1SuggestTrialsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1SuggestTrialsMetadata.to_json())

# convert the object into a dict
google_cloud_ml_v1_suggest_trials_metadata_dict = google_cloud_ml_v1_suggest_trials_metadata_instance.to_dict()
# create an instance of GoogleCloudMlV1SuggestTrialsMetadata from a dict
google_cloud_ml_v1_suggest_trials_metadata_from_dict = GoogleCloudMlV1SuggestTrialsMetadata.from_dict(google_cloud_ml_v1_suggest_trials_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


