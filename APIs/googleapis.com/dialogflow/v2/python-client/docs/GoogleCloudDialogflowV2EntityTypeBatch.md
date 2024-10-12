# GoogleCloudDialogflowV2EntityTypeBatch

This message is a wrapper around a collection of entity types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types** | [**List[GoogleCloudDialogflowV2EntityType]**](GoogleCloudDialogflowV2EntityType.md) | A collection of entity types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_entity_type_batch import GoogleCloudDialogflowV2EntityTypeBatch

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2EntityTypeBatch from a JSON string
google_cloud_dialogflow_v2_entity_type_batch_instance = GoogleCloudDialogflowV2EntityTypeBatch.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2EntityTypeBatch.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_entity_type_batch_dict = google_cloud_dialogflow_v2_entity_type_batch_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2EntityTypeBatch from a dict
google_cloud_dialogflow_v2_entity_type_batch_from_dict = GoogleCloudDialogflowV2EntityTypeBatch.from_dict(google_cloud_dialogflow_v2_entity_type_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


