# GoogleCloudDialogflowCxV3ImportEntityTypesResponse

The response message for EntityTypes.ImportEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflicting_resources** | [**GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources**](GoogleCloudDialogflowCxV3ImportEntityTypesResponseConflictingResources.md) |  | [optional] 
**entity_types** | **List[str]** | The unique identifier of the imported entity types. Format: &#x60;projects//locations//agents//entity_types/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_import_entity_types_response import GoogleCloudDialogflowCxV3ImportEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ImportEntityTypesResponse from a JSON string
google_cloud_dialogflow_cx_v3_import_entity_types_response_instance = GoogleCloudDialogflowCxV3ImportEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ImportEntityTypesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_import_entity_types_response_dict = google_cloud_dialogflow_cx_v3_import_entity_types_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ImportEntityTypesResponse from a dict
google_cloud_dialogflow_cx_v3_import_entity_types_response_from_dict = GoogleCloudDialogflowCxV3ImportEntityTypesResponse.from_dict(google_cloud_dialogflow_cx_v3_import_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


