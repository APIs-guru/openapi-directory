# GoogleCloudAiplatformV1Tensor

A tensor value type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_val** | **List[bool]** | Type specific representations that make it easy to create tensor protos in all languages. Only the representation corresponding to \&quot;dtype\&quot; can be set. The values hold the flattened representation of the tensor in row major order. BOOL | [optional] 
**bytes_val** | **List[bytearray]** | STRING | [optional] 
**double_val** | **List[float]** | DOUBLE | [optional] 
**dtype** | **str** | The data type of tensor. | [optional] 
**float_val** | **List[float]** | FLOAT | [optional] 
**int64_val** | **List[str]** | INT64 | [optional] 
**int_val** | **List[int]** | INT_8 INT_16 INT_32 | [optional] 
**list_val** | [**List[GoogleCloudAiplatformV1Tensor]**](GoogleCloudAiplatformV1Tensor.md) | A list of tensor values. | [optional] 
**shape** | **List[str]** | Shape of the tensor. | [optional] 
**string_val** | **List[str]** | STRING | [optional] 
**struct_val** | [**Dict[str, GoogleCloudAiplatformV1Tensor]**](GoogleCloudAiplatformV1Tensor.md) | A map of string to tensor. | [optional] 
**tensor_val** | **bytearray** | Serialized raw tensor content. | [optional] 
**uint64_val** | **List[str]** | UINT64 | [optional] 
**uint_val** | **List[int]** | UINT8 UINT16 UINT32 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_tensor import GoogleCloudAiplatformV1Tensor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Tensor from a JSON string
google_cloud_aiplatform_v1_tensor_instance = GoogleCloudAiplatformV1Tensor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Tensor.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_tensor_dict = google_cloud_aiplatform_v1_tensor_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Tensor from a dict
google_cloud_aiplatform_v1_tensor_from_dict = GoogleCloudAiplatformV1Tensor.from_dict(google_cloud_aiplatform_v1_tensor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


