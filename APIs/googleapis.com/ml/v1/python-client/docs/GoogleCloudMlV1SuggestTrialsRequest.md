# GoogleCloudMlV1SuggestTrialsRequest

The request message for the SuggestTrial service method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Required. The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same &#x60;client_id&#x60;, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed. | [optional] 
**suggestion_count** | **int** | Required. The number of suggestions requested. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_suggest_trials_request import GoogleCloudMlV1SuggestTrialsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1SuggestTrialsRequest from a JSON string
google_cloud_ml_v1_suggest_trials_request_instance = GoogleCloudMlV1SuggestTrialsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1SuggestTrialsRequest.to_json())

# convert the object into a dict
google_cloud_ml_v1_suggest_trials_request_dict = google_cloud_ml_v1_suggest_trials_request_instance.to_dict()
# create an instance of GoogleCloudMlV1SuggestTrialsRequest from a dict
google_cloud_ml_v1_suggest_trials_request_from_dict = GoogleCloudMlV1SuggestTrialsRequest.from_dict(google_cloud_ml_v1_suggest_trials_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


