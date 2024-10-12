# CloudAiNlLlmProtoServiceContent

The content of a single message from a participant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parts** | [**List[CloudAiNlLlmProtoServicePart]**](CloudAiNlLlmProtoServicePart.md) | The parts of the message. | [optional] 
**role** | **str** | The role of the current conversation participant. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_content import CloudAiNlLlmProtoServiceContent

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceContent from a JSON string
cloud_ai_nl_llm_proto_service_content_instance = CloudAiNlLlmProtoServiceContent.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceContent.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_content_dict = cloud_ai_nl_llm_proto_service_content_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceContent from a dict
cloud_ai_nl_llm_proto_service_content_from_dict = CloudAiNlLlmProtoServiceContent.from_dict(cloud_ai_nl_llm_proto_service_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


