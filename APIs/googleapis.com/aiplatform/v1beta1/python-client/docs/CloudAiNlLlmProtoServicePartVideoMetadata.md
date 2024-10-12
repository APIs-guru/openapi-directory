# CloudAiNlLlmProtoServicePartVideoMetadata

Metadata describes the input video content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_offset** | **str** | The end offset of the video. | [optional] 
**start_offset** | **str** | The start offset of the video. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_part_video_metadata import CloudAiNlLlmProtoServicePartVideoMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServicePartVideoMetadata from a JSON string
cloud_ai_nl_llm_proto_service_part_video_metadata_instance = CloudAiNlLlmProtoServicePartVideoMetadata.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServicePartVideoMetadata.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_part_video_metadata_dict = cloud_ai_nl_llm_proto_service_part_video_metadata_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServicePartVideoMetadata from a dict
cloud_ai_nl_llm_proto_service_part_video_metadata_from_dict = CloudAiNlLlmProtoServicePartVideoMetadata.from_dict(cloud_ai_nl_llm_proto_service_part_video_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


