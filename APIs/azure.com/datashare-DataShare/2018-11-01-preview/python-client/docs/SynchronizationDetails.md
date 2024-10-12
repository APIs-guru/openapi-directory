# SynchronizationDetails

Synchronization details at data set level

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | Id of data set | [optional] [readonly] 
**data_set_type** | **str** | Type of the data set | [optional] [readonly] 
**duration_ms** | **int** | Duration of data set level copy | [optional] [readonly] 
**end_time** | **datetime** | End time of data set level copy | [optional] [readonly] 
**files_read** | **int** | The number of files read from the source data set | [optional] [readonly] 
**files_written** | **int** | The number of files written into the sink data set | [optional] [readonly] 
**message** | **str** | Error message if any | [optional] [readonly] 
**name** | **str** | Name of the data set | [optional] [readonly] 
**rows_copied** | **int** | The number of files copied into the sink data set | [optional] [readonly] 
**rows_read** | **int** | The number of rows read from the source data set. | [optional] [readonly] 
**size_read** | **int** | The size of the data read from the source data set in bytes | [optional] [readonly] 
**size_written** | **int** | The size of the data written into the sink data set in bytes | [optional] [readonly] 
**start_time** | **datetime** | Start time of data set level copy | [optional] [readonly] 
**status** | **str** | Raw Status | [optional] [readonly] 
**v_core** | **int** | The vCore units consumed for the data set synchronization | [optional] [readonly] 

## Example

```python
from openapi_client.models.synchronization_details import SynchronizationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SynchronizationDetails from a JSON string
synchronization_details_instance = SynchronizationDetails.from_json(json)
# print the JSON string representation of the object
print(SynchronizationDetails.to_json())

# convert the object into a dict
synchronization_details_dict = synchronization_details_instance.to_dict()
# create an instance of SynchronizationDetails from a dict
synchronization_details_from_dict = SynchronizationDetails.from_dict(synchronization_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


