# GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources

Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_display_names** | **List[str]** | Display names of conflicting entities. | [optional] 
**entity_type_display_names** | **List[str]** | Display names of conflicting entity types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_import_entity_types_response_conflicting_resources import GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources from a JSON string
google_cloud_dialogflow_cx_v3_import_entity_types_response_conflicting_resources_instance = GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_import_entity_types_response_conflicting_resources_dict = google_cloud_dialogflow_cx_v3_import_entity_types_response_conflicting_resources_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources from a dict
google_cloud_dialogflow_cx_v3_import_entity_types_response_conflicting_resources_from_dict = GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources.from_dict(google_cloud_dialogflow_cx_v3_import_entity_types_response_conflicting_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


