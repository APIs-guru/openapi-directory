# GoogleCloudAiplatformV1beta1SuggestTrialsMetadata

Details of operations that perform Trials suggestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same &#x60;client_id&#x60;, the service will return the identical suggested Trial if the Trial is pending, and provide a new Trial if the last suggested Trial was completed. | [optional] 
**generic_metadata** | [**GoogleCloudAiplatformV1beta1GenericOperationMetadata**](GoogleCloudAiplatformV1beta1GenericOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_suggest_trials_metadata import GoogleCloudAiplatformV1beta1SuggestTrialsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SuggestTrialsMetadata from a JSON string
google_cloud_aiplatform_v1beta1_suggest_trials_metadata_instance = GoogleCloudAiplatformV1beta1SuggestTrialsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SuggestTrialsMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_suggest_trials_metadata_dict = google_cloud_aiplatform_v1beta1_suggest_trials_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SuggestTrialsMetadata from a dict
google_cloud_aiplatform_v1beta1_suggest_trials_metadata_from_dict = GoogleCloudAiplatformV1beta1SuggestTrialsMetadata.from_dict(google_cloud_aiplatform_v1beta1_suggest_trials_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


