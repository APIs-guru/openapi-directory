# StructuredStorageInfo

StructuredStorageInfo contains details about the data stored in Structured Storage for the referenced resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_bytes** | **str** | Size in bytes of data stored in structured storage. | [optional] 

## Example

```python
from openapi_client.models.structured_storage_info import StructuredStorageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredStorageInfo from a JSON string
structured_storage_info_instance = StructuredStorageInfo.from_json(json)
# print the JSON string representation of the object
print(StructuredStorageInfo.to_json())

# convert the object into a dict
structured_storage_info_dict = structured_storage_info_instance.to_dict()
# create an instance of StructuredStorageInfo from a dict
structured_storage_info_from_dict = StructuredStorageInfo.from_dict(structured_storage_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


