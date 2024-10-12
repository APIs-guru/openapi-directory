# GpuResource

The GPU resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The count of the GPU resource. | 
**sku** | **str** | The SKU of the GPU resource. | 

## Example

```python
from openapi_client.models.gpu_resource import GpuResource

# TODO update the JSON string below
json = "{}"
# create an instance of GpuResource from a JSON string
gpu_resource_instance = GpuResource.from_json(json)
# print the JSON string representation of the object
print(GpuResource.to_json())

# convert the object into a dict
gpu_resource_dict = gpu_resource_instance.to_dict()
# create an instance of GpuResource from a dict
gpu_resource_from_dict = GpuResource.from_dict(gpu_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


