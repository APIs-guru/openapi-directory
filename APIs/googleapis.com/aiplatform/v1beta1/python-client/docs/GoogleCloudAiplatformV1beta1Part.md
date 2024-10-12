# GoogleCloudAiplatformV1beta1Part

A datatype containing media that is part of a multi-part `Content` message. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. A `Part` must have a fixed IANA MIME type identifying the type and subtype of the media if `inline_data` or `file_data` field is filled with raw bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_data** | [**GoogleCloudAiplatformV1beta1FileData**](GoogleCloudAiplatformV1beta1FileData.md) |  | [optional] 
**function_call** | [**GoogleCloudAiplatformV1beta1FunctionCall**](GoogleCloudAiplatformV1beta1FunctionCall.md) |  | [optional] 
**function_response** | [**GoogleCloudAiplatformV1beta1FunctionResponse**](GoogleCloudAiplatformV1beta1FunctionResponse.md) |  | [optional] 
**inline_data** | [**GoogleCloudAiplatformV1beta1Blob**](GoogleCloudAiplatformV1beta1Blob.md) |  | [optional] 
**text** | **str** | Optional. Text part (can be code). | [optional] 
**video_metadata** | [**GoogleCloudAiplatformV1beta1VideoMetadata**](GoogleCloudAiplatformV1beta1VideoMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_part import GoogleCloudAiplatformV1beta1Part

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Part from a JSON string
google_cloud_aiplatform_v1beta1_part_instance = GoogleCloudAiplatformV1beta1Part.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Part.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_part_dict = google_cloud_aiplatform_v1beta1_part_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Part from a dict
google_cloud_aiplatform_v1beta1_part_from_dict = GoogleCloudAiplatformV1beta1Part.from_dict(google_cloud_aiplatform_v1beta1_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


