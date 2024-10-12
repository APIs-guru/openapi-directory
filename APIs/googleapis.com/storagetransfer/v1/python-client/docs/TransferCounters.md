# TransferCounters

A collection of counters that report the progress of a transfer operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_copied_to_sink** | **str** | Bytes that are copied to the data sink. | [optional] 
**bytes_deleted_from_sink** | **str** | Bytes that are deleted from the data sink. | [optional] 
**bytes_deleted_from_source** | **str** | Bytes that are deleted from the data source. | [optional] 
**bytes_failed_to_delete_from_sink** | **str** | Bytes that failed to be deleted from the data sink. | [optional] 
**bytes_found_from_source** | **str** | Bytes found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync. | [optional] 
**bytes_found_only_from_sink** | **str** | Bytes found only in the data sink that are scheduled to be deleted. | [optional] 
**bytes_from_source_failed** | **str** | Bytes in the data source that failed to be transferred or that failed to be deleted after being transferred. | [optional] 
**bytes_from_source_skipped_by_sync** | **str** | Bytes in the data source that are not transferred because they already exist in the data sink. | [optional] 
**directories_failed_to_list_from_source** | **str** | For transfers involving PosixFilesystem only. Number of listing failures for each directory found at the source. Potential failures when listing a directory include permission failure or block failure. If listing a directory fails, no files in the directory are transferred. | [optional] 
**directories_found_from_source** | **str** | For transfers involving PosixFilesystem only. Number of directories found while listing. For example, if the root directory of the transfer is &#x60;base/&#x60; and there are two other directories, &#x60;a/&#x60; and &#x60;b/&#x60; under this directory, the count after listing &#x60;base/&#x60;, &#x60;base/a/&#x60; and &#x60;base/b/&#x60; is 3. | [optional] 
**directories_successfully_listed_from_source** | **str** | For transfers involving PosixFilesystem only. Number of successful listings for each directory found at the source. | [optional] 
**intermediate_objects_cleaned_up** | **str** | Number of successfully cleaned up intermediate objects. | [optional] 
**intermediate_objects_failed_cleaned_up** | **str** | Number of intermediate objects failed cleaned up. | [optional] 
**objects_copied_to_sink** | **str** | Objects that are copied to the data sink. | [optional] 
**objects_deleted_from_sink** | **str** | Objects that are deleted from the data sink. | [optional] 
**objects_deleted_from_source** | **str** | Objects that are deleted from the data source. | [optional] 
**objects_failed_to_delete_from_sink** | **str** | Objects that failed to be deleted from the data sink. | [optional] 
**objects_found_from_source** | **str** | Objects found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync. | [optional] 
**objects_found_only_from_sink** | **str** | Objects found only in the data sink that are scheduled to be deleted. | [optional] 
**objects_from_source_failed** | **str** | Objects in the data source that failed to be transferred or that failed to be deleted after being transferred. | [optional] 
**objects_from_source_skipped_by_sync** | **str** | Objects in the data source that are not transferred because they already exist in the data sink. | [optional] 

## Example

```python
from openapi_client.models.transfer_counters import TransferCounters

# TODO update the JSON string below
json = "{}"
# create an instance of TransferCounters from a JSON string
transfer_counters_instance = TransferCounters.from_json(json)
# print the JSON string representation of the object
print(TransferCounters.to_json())

# convert the object into a dict
transfer_counters_dict = transfer_counters_instance.to_dict()
# create an instance of TransferCounters from a dict
transfer_counters_from_dict = TransferCounters.from_dict(transfer_counters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


