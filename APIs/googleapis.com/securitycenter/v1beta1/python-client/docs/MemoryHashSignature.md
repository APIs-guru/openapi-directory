# MemoryHashSignature

A signature corresponding to memory page hashes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_family** | **str** | The binary family. | [optional] 
**detections** | [**List[Detection]**](Detection.md) | The list of memory hash detections contributing to the binary family match. | [optional] 

## Example

```python
from openapi_client.models.memory_hash_signature import MemoryHashSignature

# TODO update the JSON string below
json = "{}"
# create an instance of MemoryHashSignature from a JSON string
memory_hash_signature_instance = MemoryHashSignature.from_json(json)
# print the JSON string representation of the object
print(MemoryHashSignature.to_json())

# convert the object into a dict
memory_hash_signature_dict = memory_hash_signature_instance.to_dict()
# create an instance of MemoryHashSignature from a dict
memory_hash_signature_from_dict = MemoryHashSignature.from_dict(memory_hash_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


