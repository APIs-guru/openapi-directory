# SyncGroupLogProperties

Properties of an Azure SQL Database sync group log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Details of the sync group log. | [optional] [readonly] 
**operation_status** | **str** | OperationStatus of the sync group log. | [optional] [readonly] 
**source** | **str** | Source of the sync group log. | [optional] [readonly] 
**timestamp** | **datetime** | Timestamp of the sync group log. | [optional] [readonly] 
**tracing_id** | **str** | TracingId of the sync group log. | [optional] [readonly] 
**type** | **str** | Type of the sync group log. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_group_log_properties import SyncGroupLogProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupLogProperties from a JSON string
sync_group_log_properties_instance = SyncGroupLogProperties.from_json(json)
# print the JSON string representation of the object
print(SyncGroupLogProperties.to_json())

# convert the object into a dict
sync_group_log_properties_dict = sync_group_log_properties_instance.to_dict()
# create an instance of SyncGroupLogProperties from a dict
sync_group_log_properties_from_dict = SyncGroupLogProperties.from_dict(sync_group_log_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


