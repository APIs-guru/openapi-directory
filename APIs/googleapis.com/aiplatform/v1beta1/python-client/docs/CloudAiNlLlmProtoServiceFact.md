# CloudAiNlLlmProtoServiceFact

A condense version of WorldFact (assistant/boq/lamda/factuality/proto/factuality.proto) to propagate the essential information about the fact used in factuality to the upstream caller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Query that is used to retrieve this fact. | [optional] 
**summary** | **str** | If present, the summary/snippet of the fact. | [optional] 
**title** | **str** | If present, it refers to the title of this fact. | [optional] 
**url** | **str** | If present, this URL links to the webpage of the fact. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_fact import CloudAiNlLlmProtoServiceFact

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceFact from a JSON string
cloud_ai_nl_llm_proto_service_fact_instance = CloudAiNlLlmProtoServiceFact.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceFact.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_fact_dict = cloud_ai_nl_llm_proto_service_fact_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceFact from a dict
cloud_ai_nl_llm_proto_service_fact_from_dict = CloudAiNlLlmProtoServiceFact.from_dict(cloud_ai_nl_llm_proto_service_fact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


