# GoogleCloudVisionV1p1beta1InputConfig

The desired input location and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | File content, represented as a stream of bytes. Note: As with all &#x60;bytes&#x60; fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. | [optional] 
**gcs_source** | [**GoogleCloudVisionV1p1beta1GcsSource**](GoogleCloudVisionV1p1beta1GcsSource.md) |  | [optional] 
**mime_type** | **str** | The type of the file. Currently only \&quot;application/pdf\&quot;, \&quot;image/tiff\&quot; and \&quot;image/gif\&quot; are supported. Wildcards are not supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_input_config import GoogleCloudVisionV1p1beta1InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1InputConfig from a JSON string
google_cloud_vision_v1p1beta1_input_config_instance = GoogleCloudVisionV1p1beta1InputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1InputConfig.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_input_config_dict = google_cloud_vision_v1p1beta1_input_config_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1InputConfig from a dict
google_cloud_vision_v1p1beta1_input_config_from_dict = GoogleCloudVisionV1p1beta1InputConfig.from_dict(google_cloud_vision_v1p1beta1_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


