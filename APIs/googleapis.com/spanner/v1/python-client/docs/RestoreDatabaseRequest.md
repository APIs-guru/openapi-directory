# RestoreDatabaseRequest

The request for RestoreDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Name of the backup from which to restore. Values are of the form &#x60;projects//instances//backups/&#x60;. | [optional] 
**database_id** | **str** | Required. The id of the database to create and restore to. This database must not already exist. The &#x60;database_id&#x60; appended to &#x60;parent&#x60; forms the full database name of the form &#x60;projects//instances//databases/&#x60;. | [optional] 
**encryption_config** | [**RestoreDatabaseEncryptionConfig**](RestoreDatabaseEncryptionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.restore_database_request import RestoreDatabaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreDatabaseRequest from a JSON string
restore_database_request_instance = RestoreDatabaseRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreDatabaseRequest.to_json())

# convert the object into a dict
restore_database_request_dict = restore_database_request_instance.to_dict()
# create an instance of RestoreDatabaseRequest from a dict
restore_database_request_from_dict = RestoreDatabaseRequest.from_dict(restore_database_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


