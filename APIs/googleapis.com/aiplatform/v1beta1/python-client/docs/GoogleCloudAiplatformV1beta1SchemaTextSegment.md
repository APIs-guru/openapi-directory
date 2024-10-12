# GoogleCloudAiplatformV1beta1SchemaTextSegment

The text segment inside of DataItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The text content in the segment for output only. | [optional] 
**end_offset** | **str** | Zero-based character index of the first character past the end of the text segment (counting character from the beginning of the text). The character at the end_offset is NOT included in the text segment. | [optional] 
**start_offset** | **str** | Zero-based character index of the first character of the text segment (counting characters from the beginning of the text). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_text_segment import GoogleCloudAiplatformV1beta1SchemaTextSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTextSegment from a JSON string
google_cloud_aiplatform_v1beta1_schema_text_segment_instance = GoogleCloudAiplatformV1beta1SchemaTextSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTextSegment.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_text_segment_dict = google_cloud_aiplatform_v1beta1_schema_text_segment_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTextSegment from a dict
google_cloud_aiplatform_v1beta1_schema_text_segment_from_dict = GoogleCloudAiplatformV1beta1SchemaTextSegment.from_dict(google_cloud_aiplatform_v1beta1_schema_text_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


