# BlobRestoreRange

Blob range

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_range** | **str** | Blob end range. Empty means account end. | 
**start_range** | **str** | Blob start range. Empty means account start. | 

## Example

```python
from openapi_client.models.blob_restore_range import BlobRestoreRange

# TODO update the JSON string below
json = "{}"
# create an instance of BlobRestoreRange from a JSON string
blob_restore_range_instance = BlobRestoreRange.from_json(json)
# print the JSON string representation of the object
print(BlobRestoreRange.to_json())

# convert the object into a dict
blob_restore_range_dict = blob_restore_range_instance.to_dict()
# create an instance of BlobRestoreRange from a dict
blob_restore_range_from_dict = BlobRestoreRange.from_dict(blob_restore_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


