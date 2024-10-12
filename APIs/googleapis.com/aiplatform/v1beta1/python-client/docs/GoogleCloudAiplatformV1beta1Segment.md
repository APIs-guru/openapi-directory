# GoogleCloudAiplatformV1beta1Segment

Segment of the content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | Output only. End index in the given Part, measured in bytes. Offset from the start of the Part, exclusive, starting at zero. | [optional] [readonly] 
**part_index** | **int** | Output only. The index of a Part object within its parent Content object. | [optional] [readonly] 
**start_index** | **int** | Output only. Start index in the given Part, measured in bytes. Offset from the start of the Part, inclusive, starting at zero. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_segment import GoogleCloudAiplatformV1beta1Segment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Segment from a JSON string
google_cloud_aiplatform_v1beta1_segment_instance = GoogleCloudAiplatformV1beta1Segment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Segment.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_segment_dict = google_cloud_aiplatform_v1beta1_segment_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Segment from a dict
google_cloud_aiplatform_v1beta1_segment_from_dict = GoogleCloudAiplatformV1beta1Segment.from_dict(google_cloud_aiplatform_v1beta1_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


