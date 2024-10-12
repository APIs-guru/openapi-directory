# BlobRestoreStatus

Blob restore status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_reason** | **str** | Failure reason when blob restore is failed. | [optional] [readonly] 
**parameters** | [**BlobRestoreParameters**](BlobRestoreParameters.md) |  | [optional] 
**restore_id** | **str** | Id for tracking blob restore request. | [optional] [readonly] 
**status** | **str** | The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_restore_status import BlobRestoreStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BlobRestoreStatus from a JSON string
blob_restore_status_instance = BlobRestoreStatus.from_json(json)
# print the JSON string representation of the object
print(BlobRestoreStatus.to_json())

# convert the object into a dict
blob_restore_status_dict = blob_restore_status_instance.to_dict()
# create an instance of BlobRestoreStatus from a dict
blob_restore_status_from_dict = BlobRestoreStatus.from_dict(blob_restore_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


