# GoogleCloudAiplatformV1beta1SchemaTextDatasetMetadata

The metadata of Datasets that contain Text DataItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_item_schema_uri** | **str** | Points to a YAML file stored on Google Cloud Storage describing payload of the Text DataItems that belong to this Dataset. | [optional] 
**gcs_bucket** | **str** | Google Cloud Storage Bucket name that contains the blob data of this Dataset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_text_dataset_metadata import GoogleCloudAiplatformV1beta1SchemaTextDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTextDatasetMetadata from a JSON string
google_cloud_aiplatform_v1beta1_schema_text_dataset_metadata_instance = GoogleCloudAiplatformV1beta1SchemaTextDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTextDatasetMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_text_dataset_metadata_dict = google_cloud_aiplatform_v1beta1_schema_text_dataset_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTextDatasetMetadata from a dict
google_cloud_aiplatform_v1beta1_schema_text_dataset_metadata_from_dict = GoogleCloudAiplatformV1beta1SchemaTextDatasetMetadata.from_dict(google_cloud_aiplatform_v1beta1_schema_text_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


