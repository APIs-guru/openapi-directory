# GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse

The response message for EntityTypes.BatchUpdateEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types** | [**List[GoogleCloudDialogflowV2EntityType]**](GoogleCloudDialogflowV2EntityType.md) | The collection of updated or created entity types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_batch_update_entity_types_response import GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse from a JSON string
google_cloud_dialogflow_v2_batch_update_entity_types_response_instance = GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_batch_update_entity_types_response_dict = google_cloud_dialogflow_v2_batch_update_entity_types_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse from a dict
google_cloud_dialogflow_v2_batch_update_entity_types_response_from_dict = GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse.from_dict(google_cloud_dialogflow_v2_batch_update_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


