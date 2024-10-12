# GoogleCloudAiplatformV1beta1Content

The base structured datatype containing multi-part content of a message. A `Content` includes a `role` field designating the producer of the `Content` and a `parts` field containing multi-part data that contains the content of the message turn.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parts** | [**List[GoogleCloudAiplatformV1beta1Part]**](GoogleCloudAiplatformV1beta1Part.md) | Required. Ordered &#x60;Parts&#x60; that constitute a single message. Parts may have different IANA MIME types. | [optional] 
**role** | **str** | Optional. The producer of the content. Must be either &#39;user&#39; or &#39;model&#39;. Useful to set for multi-turn conversations, otherwise can be left blank or unset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_content import GoogleCloudAiplatformV1beta1Content

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Content from a JSON string
google_cloud_aiplatform_v1beta1_content_instance = GoogleCloudAiplatformV1beta1Content.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Content.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_content_dict = google_cloud_aiplatform_v1beta1_content_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Content from a dict
google_cloud_aiplatform_v1beta1_content_from_dict = GoogleCloudAiplatformV1beta1Content.from_dict(google_cloud_aiplatform_v1beta1_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


