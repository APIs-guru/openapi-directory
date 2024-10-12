# GoogleCloudAiplatformV1beta1Blob

Raw media bytes. Text should not be sent as raw bytes, use the 'text' field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Required. Raw bytes for media formats. | [optional] 
**mime_type** | **str** | Required. The IANA standard MIME type of the source data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_blob import GoogleCloudAiplatformV1beta1Blob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Blob from a JSON string
google_cloud_aiplatform_v1beta1_blob_instance = GoogleCloudAiplatformV1beta1Blob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Blob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_blob_dict = google_cloud_aiplatform_v1beta1_blob_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Blob from a dict
google_cloud_aiplatform_v1beta1_blob_from_dict = GoogleCloudAiplatformV1beta1Blob.from_dict(google_cloud_aiplatform_v1beta1_blob_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


