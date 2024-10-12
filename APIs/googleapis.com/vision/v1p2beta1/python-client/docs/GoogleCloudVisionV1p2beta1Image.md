# GoogleCloudVisionV1p2beta1Image

Client image to perform Google Cloud Vision API tasks over.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Image content, represented as a stream of bytes. Note: As with all &#x60;bytes&#x60; fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests. | [optional] 
**source** | [**GoogleCloudVisionV1p2beta1ImageSource**](GoogleCloudVisionV1p2beta1ImageSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_image import GoogleCloudVisionV1p2beta1Image

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1Image from a JSON string
google_cloud_vision_v1p2beta1_image_instance = GoogleCloudVisionV1p2beta1Image.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1Image.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_image_dict = google_cloud_vision_v1p2beta1_image_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1Image from a dict
google_cloud_vision_v1p2beta1_image_from_dict = GoogleCloudVisionV1p2beta1Image.from_dict(google_cloud_vision_v1p2beta1_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


