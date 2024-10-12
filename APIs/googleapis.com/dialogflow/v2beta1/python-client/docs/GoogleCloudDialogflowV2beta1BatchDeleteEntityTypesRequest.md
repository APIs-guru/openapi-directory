# GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest

The request message for EntityTypes.BatchDeleteEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type_names** | **List[str]** | Required. The names entity types to delete. All names must point to the same agent as &#x60;parent&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_batch_delete_entity_types_request import GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest from a JSON string
google_cloud_dialogflow_v2beta1_batch_delete_entity_types_request_instance = GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_batch_delete_entity_types_request_dict = google_cloud_dialogflow_v2beta1_batch_delete_entity_types_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest from a dict
google_cloud_dialogflow_v2beta1_batch_delete_entity_types_request_from_dict = GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest.from_dict(google_cloud_dialogflow_v2beta1_batch_delete_entity_types_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


