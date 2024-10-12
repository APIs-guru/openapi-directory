# SqlInstancesStartExternalSyncRequest

Instance start external sync request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_sync_config** | [**MySqlSyncConfig**](MySqlSyncConfig.md) |  | [optional] 
**skip_verification** | **bool** | Whether to skip the verification step (VESS). | [optional] 
**sync_mode** | **str** | External sync mode. | [optional] 
**sync_parallel_level** | **str** | Optional. Parallel level for initial data sync. Currently only applicable for MySQL. | [optional] 

## Example

```python
from openapi_client.models.sql_instances_start_external_sync_request import SqlInstancesStartExternalSyncRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SqlInstancesStartExternalSyncRequest from a JSON string
sql_instances_start_external_sync_request_instance = SqlInstancesStartExternalSyncRequest.from_json(json)
# print the JSON string representation of the object
print(SqlInstancesStartExternalSyncRequest.to_json())

# convert the object into a dict
sql_instances_start_external_sync_request_dict = sql_instances_start_external_sync_request_instance.to_dict()
# create an instance of SqlInstancesStartExternalSyncRequest from a dict
sql_instances_start_external_sync_request_from_dict = SqlInstancesStartExternalSyncRequest.from_dict(sql_instances_start_external_sync_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


