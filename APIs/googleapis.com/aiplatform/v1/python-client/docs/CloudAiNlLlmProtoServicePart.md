# CloudAiNlLlmProtoServicePart

A single part of a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_data** | [**CloudAiNlLlmProtoServicePartFileData**](CloudAiNlLlmProtoServicePartFileData.md) |  | [optional] 
**function_call** | [**CloudAiNlLlmProtoServiceFunctionCall**](CloudAiNlLlmProtoServiceFunctionCall.md) |  | [optional] 
**function_response** | [**CloudAiNlLlmProtoServiceFunctionResponse**](CloudAiNlLlmProtoServiceFunctionResponse.md) |  | [optional] 
**inline_data** | [**CloudAiNlLlmProtoServicePartBlob**](CloudAiNlLlmProtoServicePartBlob.md) |  | [optional] 
**text** | **str** | Text input. | [optional] 
**video_metadata** | [**CloudAiNlLlmProtoServicePartVideoMetadata**](CloudAiNlLlmProtoServicePartVideoMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_part import CloudAiNlLlmProtoServicePart

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServicePart from a JSON string
cloud_ai_nl_llm_proto_service_part_instance = CloudAiNlLlmProtoServicePart.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServicePart.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_part_dict = cloud_ai_nl_llm_proto_service_part_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServicePart from a dict
cloud_ai_nl_llm_proto_service_part_from_dict = CloudAiNlLlmProtoServicePart.from_dict(cloud_ai_nl_llm_proto_service_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


