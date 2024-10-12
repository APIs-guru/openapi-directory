# CloudAiNlLlmProtoServiceUsageMetadata

Usage metadata about response(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates_token_count** | **int** | Number of tokens in the response(s). | [optional] 
**prompt_token_count** | **int** | Number of tokens in the request. | [optional] 
**total_token_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_usage_metadata import CloudAiNlLlmProtoServiceUsageMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceUsageMetadata from a JSON string
cloud_ai_nl_llm_proto_service_usage_metadata_instance = CloudAiNlLlmProtoServiceUsageMetadata.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceUsageMetadata.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_usage_metadata_dict = cloud_ai_nl_llm_proto_service_usage_metadata_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceUsageMetadata from a dict
cloud_ai_nl_llm_proto_service_usage_metadata_from_dict = CloudAiNlLlmProtoServiceUsageMetadata.from_dict(cloud_ai_nl_llm_proto_service_usage_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


