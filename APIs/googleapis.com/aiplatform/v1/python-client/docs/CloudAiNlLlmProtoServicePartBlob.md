# CloudAiNlLlmProtoServicePartBlob

Represents arbitrary blob data input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Inline data. | [optional] 
**mime_type** | **str** | The mime type corresponding to this input. | [optional] 
**original_file_data** | [**CloudAiNlLlmProtoServicePartFileData**](CloudAiNlLlmProtoServicePartFileData.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_nl_llm_proto_service_part_blob import CloudAiNlLlmProtoServicePartBlob

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiNlLlmProtoServicePartBlob from a JSON string
cloud_ai_nl_llm_proto_service_part_blob_instance = CloudAiNlLlmProtoServicePartBlob.from_json(json)
# print the JSON string representation of the object
print(CloudAiNlLlmProtoServicePartBlob.to_json())

# convert the object into a dict
cloud_ai_nl_llm_proto_service_part_blob_dict = cloud_ai_nl_llm_proto_service_part_blob_instance.to_dict()
# create an instance of CloudAiNlLlmProtoServicePartBlob from a dict
cloud_ai_nl_llm_proto_service_part_blob_from_dict = CloudAiNlLlmProtoServicePartBlob.from_dict(cloud_ai_nl_llm_proto_service_part_blob_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


