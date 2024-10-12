# GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse

The response message for EntityTypes.BatchUpdateEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types** | [**List[GoogleCloudDialogflowV2beta1EntityType]**](GoogleCloudDialogflowV2beta1EntityType.md) | The collection of updated or created entity types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_batch_update_entity_types_response import GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse from a JSON string
google_cloud_dialogflow_v2beta1_batch_update_entity_types_response_instance = GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_batch_update_entity_types_response_dict = google_cloud_dialogflow_v2beta1_batch_update_entity_types_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse from a dict
google_cloud_dialogflow_v2beta1_batch_update_entity_types_response_from_dict = GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse.from_dict(google_cloud_dialogflow_v2beta1_batch_update_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


