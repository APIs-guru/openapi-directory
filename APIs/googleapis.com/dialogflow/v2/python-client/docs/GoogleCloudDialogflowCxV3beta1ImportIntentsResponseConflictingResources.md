# GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources

Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_display_names** | **List[str]** | Display names of conflicting entities. | [optional] 
**intent_display_names** | **List[str]** | Display names of conflicting intents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_import_intents_response_conflicting_resources import GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources from a JSON string
google_cloud_dialogflow_cx_v3beta1_import_intents_response_conflicting_resources_instance = GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_import_intents_response_conflicting_resources_dict = google_cloud_dialogflow_cx_v3beta1_import_intents_response_conflicting_resources_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources from a dict
google_cloud_dialogflow_cx_v3beta1_import_intents_response_conflicting_resources_from_dict = GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources.from_dict(google_cloud_dialogflow_cx_v3beta1_import_intents_response_conflicting_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


