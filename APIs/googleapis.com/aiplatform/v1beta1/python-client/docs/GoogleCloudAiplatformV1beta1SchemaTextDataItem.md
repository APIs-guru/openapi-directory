# GoogleCloudAiplatformV1beta1SchemaTextDataItem

Payload of Text DataItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | Output only. Google Cloud Storage URI points to the original text in user&#39;s bucket. The text file is up to 10MB in size. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_text_data_item import GoogleCloudAiplatformV1beta1SchemaTextDataItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTextDataItem from a JSON string
google_cloud_aiplatform_v1beta1_schema_text_data_item_instance = GoogleCloudAiplatformV1beta1SchemaTextDataItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTextDataItem.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_text_data_item_dict = google_cloud_aiplatform_v1beta1_schema_text_data_item_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTextDataItem from a dict
google_cloud_aiplatform_v1beta1_schema_text_data_item_from_dict = GoogleCloudAiplatformV1beta1SchemaTextDataItem.from_dict(google_cloud_aiplatform_v1beta1_schema_text_data_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


