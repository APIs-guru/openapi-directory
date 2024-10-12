# GoogleCloudAiplatformV1Part

A datatype containing media that is part of a multi-part `Content` message. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. A `Part` must have a fixed IANA MIME type identifying the type and subtype of the media if `inline_data` or `file_data` field is filled with raw bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_data** | [**GoogleCloudAiplatformV1FileData**](GoogleCloudAiplatformV1FileData.md) |  | [optional] 
**function_call** | [**GoogleCloudAiplatformV1FunctionCall**](GoogleCloudAiplatformV1FunctionCall.md) |  | [optional] 
**function_response** | [**GoogleCloudAiplatformV1FunctionResponse**](GoogleCloudAiplatformV1FunctionResponse.md) |  | [optional] 
**inline_data** | [**GoogleCloudAiplatformV1Blob**](GoogleCloudAiplatformV1Blob.md) |  | [optional] 
**text** | **str** | Optional. Text part (can be code). | [optional] 
**video_metadata** | [**GoogleCloudAiplatformV1VideoMetadata**](GoogleCloudAiplatformV1VideoMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_part import GoogleCloudAiplatformV1Part

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Part from a JSON string
google_cloud_aiplatform_v1_part_instance = GoogleCloudAiplatformV1Part.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Part.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_part_dict = google_cloud_aiplatform_v1_part_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Part from a dict
google_cloud_aiplatform_v1_part_from_dict = GoogleCloudAiplatformV1Part.from_dict(google_cloud_aiplatform_v1_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


