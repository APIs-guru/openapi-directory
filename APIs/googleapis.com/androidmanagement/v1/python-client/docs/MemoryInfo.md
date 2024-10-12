# MemoryInfo

Information about device memory and storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_internal_storage** | **str** | Total internal storage on device in bytes. | [optional] 
**total_ram** | **str** | Total RAM on device in bytes. | [optional] 

## Example

```python
from openapi_client.models.memory_info import MemoryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MemoryInfo from a JSON string
memory_info_instance = MemoryInfo.from_json(json)
# print the JSON string representation of the object
print(MemoryInfo.to_json())

# convert the object into a dict
memory_info_dict = memory_info_instance.to_dict()
# create an instance of MemoryInfo from a dict
memory_info_from_dict = MemoryInfo.from_dict(memory_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


