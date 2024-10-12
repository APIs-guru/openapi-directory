# GoogleCloudAiplatformV1beta1EntityIdSelector

Selector for entityId. Getting ids from the given source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv_source** | [**GoogleCloudAiplatformV1beta1CsvSource**](GoogleCloudAiplatformV1beta1CsvSource.md) |  | [optional] 
**entity_id_field** | **str** | Source column that holds entity IDs. If not provided, entity IDs are extracted from the column named entity_id. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_entity_id_selector import GoogleCloudAiplatformV1beta1EntityIdSelector

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1EntityIdSelector from a JSON string
google_cloud_aiplatform_v1beta1_entity_id_selector_instance = GoogleCloudAiplatformV1beta1EntityIdSelector.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1EntityIdSelector.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_entity_id_selector_dict = google_cloud_aiplatform_v1beta1_entity_id_selector_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1EntityIdSelector from a dict
google_cloud_aiplatform_v1beta1_entity_id_selector_from_dict = GoogleCloudAiplatformV1beta1EntityIdSelector.from_dict(google_cloud_aiplatform_v1beta1_entity_id_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


