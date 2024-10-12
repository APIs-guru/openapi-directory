# GoogleCloudDatalabelingV1beta1ImagePayload

Container of information about an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_thumbnail** | **bytearray** | A byte string of a thumbnail image. | [optional] 
**image_uri** | **str** | Image uri from the user bucket. | [optional] 
**mime_type** | **str** | Image format. | [optional] 
**signed_uri** | **str** | Signed uri of the image file in the service bucket. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_image_payload import GoogleCloudDatalabelingV1beta1ImagePayload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ImagePayload from a JSON string
google_cloud_datalabeling_v1beta1_image_payload_instance = GoogleCloudDatalabelingV1beta1ImagePayload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ImagePayload.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_image_payload_dict = google_cloud_datalabeling_v1beta1_image_payload_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ImagePayload from a dict
google_cloud_datalabeling_v1beta1_image_payload_from_dict = GoogleCloudDatalabelingV1beta1ImagePayload.from_dict(google_cloud_datalabeling_v1beta1_image_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


