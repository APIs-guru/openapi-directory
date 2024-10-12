# GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse

The response message for EntityTypes.ExportEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types_content** | [**GoogleCloudDialogflowCxV3beta1InlineDestination**](GoogleCloudDialogflowCxV3beta1InlineDestination.md) |  | [optional] 
**entity_types_uri** | **str** | The URI to a file containing the exported entity types. This field is populated only if &#x60;entity_types_uri&#x60; is specified in ExportEntityTypesRequest. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_export_entity_types_response import GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_export_entity_types_response_instance = GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_export_entity_types_response_dict = google_cloud_dialogflow_cx_v3beta1_export_entity_types_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse from a dict
google_cloud_dialogflow_cx_v3beta1_export_entity_types_response_from_dict = GoogleCloudDialogflowCxV3beta1ExportEntityTypesResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_export_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


