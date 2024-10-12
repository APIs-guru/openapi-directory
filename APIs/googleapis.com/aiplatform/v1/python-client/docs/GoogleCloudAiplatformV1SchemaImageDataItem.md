# GoogleCloudAiplatformV1SchemaImageDataItem

Payload of Image DataItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | Required. Google Cloud Storage URI points to the original image in user&#39;s bucket. The image is up to 30MB in size. | [optional] 
**mime_type** | **str** | Output only. The mime type of the content of the image. Only the images in below listed mime types are supported. - image/jpeg - image/gif - image/png - image/webp - image/bmp - image/tiff - image/vnd.microsoft.icon | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_image_data_item import GoogleCloudAiplatformV1SchemaImageDataItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaImageDataItem from a JSON string
google_cloud_aiplatform_v1_schema_image_data_item_instance = GoogleCloudAiplatformV1SchemaImageDataItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaImageDataItem.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_image_data_item_dict = google_cloud_aiplatform_v1_schema_image_data_item_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaImageDataItem from a dict
google_cloud_aiplatform_v1_schema_image_data_item_from_dict = GoogleCloudAiplatformV1SchemaImageDataItem.from_dict(google_cloud_aiplatform_v1_schema_image_data_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


