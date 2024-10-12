# CloudAiNlLlmProtoServiceRaiSignal

An RAI signal for a single category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **str** | The confidence level for the RAI category. | [optional] 
**flagged** | **bool** | Whether the category is flagged as being present. Currently, this is set to true if score &gt;&#x3D; 0.5. | [optional] 
**rai_category** | **str** | The RAI category. | [optional] 
**score** | **float** | The score for the category, in the range [0.0, 1.0]. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_rai_signal import CloudAiNlLlmProtoServiceRaiSignal

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServiceRaiSignal from a JSON string
cloud_ai_nl_llm_proto_service_rai_signal_instance = CloudAiNlLlmProtoServiceRaiSignal.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServiceRaiSignal.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_rai_signal_dict = cloud_ai_nl_llm_proto_service_rai_signal_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServiceRaiSignal from a dict
cloud_ai_nl_llm_proto_service_rai_signal_from_dict = CloudAiNlLlmProtoServiceRaiSignal.from_dict(cloud_ai_nl_llm_proto_service_rai_signal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


