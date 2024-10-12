# CloudAiNlLlmProtoServiceCitation

Source attributions for content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | End index into the content. | [optional] 
**license** | **str** | License of the attribution. | [optional] 
**publication_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**start_index** | **int** | Start index into the content. | [optional] 
**title** | **str** | Title of the attribution. | [optional] 
**uri** | **str** | Url reference of the attribution. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_citation import CloudAiNlLlmProtoServiceCitation

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceCitation from a JSON string
cloud_ai_nl_llm_proto_service_citation_instance = CloudAiNlLlmProtoServiceCitation.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceCitation.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_citation_dict = cloud_ai_nl_llm_proto_service_citation_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceCitation from a dict
cloud_ai_nl_llm_proto_service_citation_from_dict = CloudAiNlLlmProtoServiceCitation.from_dict(cloud_ai_nl_llm_proto_service_citation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


