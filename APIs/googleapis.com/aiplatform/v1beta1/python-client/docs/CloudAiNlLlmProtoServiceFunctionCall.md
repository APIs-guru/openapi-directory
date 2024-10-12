# CloudAiNlLlmProtoServiceFunctionCall

Function call details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **Dict[str, object]** | The function parameters and values in JSON format. | [optional] 
**name** | **str** | Required. The name of the function to call. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_function_call import CloudAiNlLlmProtoServiceFunctionCall

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceFunctionCall from a JSON string
cloud_ai_nl_llm_proto_service_function_call_instance = CloudAiNlLlmProtoServiceFunctionCall.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceFunctionCall.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_function_call_dict = cloud_ai_nl_llm_proto_service_function_call_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceFunctionCall from a dict
cloud_ai_nl_llm_proto_service_function_call_from_dict = CloudAiNlLlmProtoServiceFunctionCall.from_dict(cloud_ai_nl_llm_proto_service_function_call_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


