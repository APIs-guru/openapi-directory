# CloudAiNlLlmProtoServiceFunctionResponse

Function response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The name of the function to call. | [optional] 
**response** | **Dict[str, object]** | Required. The function response in JSON object format. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_function_response import CloudAiNlLlmProtoServiceFunctionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceFunctionResponse from a JSON string
cloud_ai_nl_llm_proto_service_function_response_instance = CloudAiNlLlmProtoServiceFunctionResponse.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceFunctionResponse.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_function_response_dict = cloud_ai_nl_llm_proto_service_function_response_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceFunctionResponse from a dict
cloud_ai_nl_llm_proto_service_function_response_from_dict = CloudAiNlLlmProtoServiceFunctionResponse.from_dict(cloud_ai_nl_llm_proto_service_function_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


