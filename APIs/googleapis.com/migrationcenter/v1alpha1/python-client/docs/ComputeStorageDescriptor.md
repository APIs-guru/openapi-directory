# ComputeStorageDescriptor

Compute Engine storage option descriptor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_gb** | **int** | Disk size in GiB. | [optional] 
**type** | **str** | Disk type backing the storage. | [optional] 

## Example

```python
from openapi_client.models.compute_storage_descriptor import ComputeStorageDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeStorageDescriptor from a JSON string
compute_storage_descriptor_instance = ComputeStorageDescriptor.from_json(json)
# print the JSON string representation of the object
print(ComputeStorageDescriptor.to_json())

# convert the object into a dict
compute_storage_descriptor_dict = compute_storage_descriptor_instance.to_dict()
# create an instance of ComputeStorageDescriptor from a dict
compute_storage_descriptor_from_dict = ComputeStorageDescriptor.from_dict(compute_storage_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


