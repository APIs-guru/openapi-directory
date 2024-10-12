# ComputeEngineShapeDescriptor

Compute Engine target shape descriptor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logical_core_count** | **int** | Number of logical cores. | [optional] 
**machine_type** | **str** | Compute Engine machine type. | [optional] 
**memory_mb** | **int** | Memory in mebibytes. | [optional] 
**physical_core_count** | **int** | Number of physical cores. | [optional] 
**series** | **str** | Compute Engine machine series. | [optional] 
**storage** | [**List[ComputeStorageDescriptor]**](ComputeStorageDescriptor.md) | Compute Engine storage. Never empty. | [optional] 

## Example

```python
from openapi_client.models.compute_engine_shape_descriptor import ComputeEngineShapeDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeEngineShapeDescriptor from a JSON string
compute_engine_shape_descriptor_instance = ComputeEngineShapeDescriptor.from_json(json)
# print the JSON string representation of the object
print(ComputeEngineShapeDescriptor.to_json())

# convert the object into a dict
compute_engine_shape_descriptor_dict = compute_engine_shape_descriptor_instance.to_dict()
# create an instance of ComputeEngineShapeDescriptor from a dict
compute_engine_shape_descriptor_from_dict = ComputeEngineShapeDescriptor.from_dict(compute_engine_shape_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


