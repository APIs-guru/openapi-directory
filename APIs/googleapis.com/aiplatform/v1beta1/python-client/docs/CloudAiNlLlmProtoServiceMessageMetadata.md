# CloudAiNlLlmProtoServiceMessageMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_filter_info** | [**LearningServingLlmMessageMetadata**](LearningServingLlmMessageMetadata.md) |  | [optional] 
**model_routing_decision** | [**LearningGenaiRootRoutingDecision**](LearningGenaiRootRoutingDecision.md) |  | [optional] 
**output_filter_info** | [**List[LearningServingLlmMessageMetadata]**](LearningServingLlmMessageMetadata.md) | Filter metadata of the output messages. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_message_metadata import CloudAiNlLlmProtoServiceMessageMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceMessageMetadata from a JSON string
cloud_ai_nl_llm_proto_service_message_metadata_instance = CloudAiNlLlmProtoServiceMessageMetadata.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceMessageMetadata.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_message_metadata_dict = cloud_ai_nl_llm_proto_service_message_metadata_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceMessageMetadata from a dict
cloud_ai_nl_llm_proto_service_message_metadata_from_dict = CloudAiNlLlmProtoServiceMessageMetadata.from_dict(cloud_ai_nl_llm_proto_service_message_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


