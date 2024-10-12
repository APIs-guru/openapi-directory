# GoogleCloudDialogflowV2beta1EntityTypeBatch

This message is a wrapper around a collection of entity types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types** | [**List[GoogleCloudDialogflowV2beta1EntityType]**](GoogleCloudDialogflowV2beta1EntityType.md) | A collection of entity types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_entity_type_batch import GoogleCloudDialogflowV2beta1EntityTypeBatch

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1EntityTypeBatch from a JSON string
google_cloud_dialogflow_v2beta1_entity_type_batch_instance = GoogleCloudDialogflowV2beta1EntityTypeBatch.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1EntityTypeBatch.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_entity_type_batch_dict = google_cloud_dialogflow_v2beta1_entity_type_batch_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1EntityTypeBatch from a dict
google_cloud_dialogflow_v2beta1_entity_type_batch_from_dict = GoogleCloudDialogflowV2beta1EntityTypeBatch.from_dict(google_cloud_dialogflow_v2beta1_entity_type_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


