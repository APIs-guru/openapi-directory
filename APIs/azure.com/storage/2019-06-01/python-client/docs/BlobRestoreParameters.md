# BlobRestoreParameters

Blob restore parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_ranges** | [**List[BlobRestoreRange]**](BlobRestoreRange.md) | Blob ranges to restore. | 
**time_to_restore** | **datetime** | Restore blob to the specified time. | 

## Example

```python
from openapi_client.models.blob_restore_parameters import BlobRestoreParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BlobRestoreParameters from a JSON string
blob_restore_parameters_instance = BlobRestoreParameters.from_json(json)
# print the JSON string representation of the object
print(BlobRestoreParameters.to_json())

# convert the object into a dict
blob_restore_parameters_dict = blob_restore_parameters_instance.to_dict()
# create an instance of BlobRestoreParameters from a dict
blob_restore_parameters_from_dict = BlobRestoreParameters.from_dict(blob_restore_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


