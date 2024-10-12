# GoogleCloudDialogflowCxV3beta1ImportIntentsResponse

The response message for Intents.ImportIntents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflicting_resources** | [**GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources**](GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources.md) |  | [optional] 
**intents** | **List[str]** | The unique identifier of the imported intents. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_import_intents_response import GoogleCloudDialogflowCxV3beta1ImportIntentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ImportIntentsResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_import_intents_response_instance = GoogleCloudDialogflowCxV3beta1ImportIntentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ImportIntentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_import_intents_response_dict = google_cloud_dialogflow_cx_v3beta1_import_intents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ImportIntentsResponse from a dict
google_cloud_dialogflow_cx_v3beta1_import_intents_response_from_dict = GoogleCloudDialogflowCxV3beta1ImportIntentsResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_import_intents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


