# Database

A Cloud Spanner database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. If exists, the time at which the database creation started. | [optional] [readonly] 
**database_dialect** | **str** | Output only. The dialect of the Cloud Spanner Database. | [optional] [readonly] 
**default_leader** | **str** | Output only. The read-write region which contains the database&#39;s leader replicas. This is the same as the value of default_leader database option set using DatabaseAdmin.CreateDatabase or DatabaseAdmin.UpdateDatabaseDdl. If not explicitly set, this is empty. | [optional] [readonly] 
**earliest_version_time** | **str** | Output only. Earliest timestamp at which older versions of the data can be read. This value is continuously updated by Cloud Spanner and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery. | [optional] [readonly] 
**enable_drop_protection** | **bool** | Whether drop protection is enabled for this database. Defaults to false, if not set. For more details, please see how to [prevent accidental database deletion](https://cloud.google.com/spanner/docs/prevent-database-deletion). | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**encryption_info** | [**List[EncryptionInfo]**](EncryptionInfo.md) | Output only. For databases that are using customer managed encryption, this field contains the encryption information for the database, such as all Cloud KMS key versions that are in use. The &#x60;encryption_status&#39; field inside of each &#x60;EncryptionInfo&#x60; is not populated. For databases that are using Google default or other types of encryption, this field is empty. This field is propagated lazily from the backend. There might be a delay from when a key version is being used and when it appears in this field. | [optional] [readonly] 
**name** | **str** | Required. The name of the database. Values are of the form &#x60;projects//instances//databases/&#x60;, where &#x60;&#x60; is as specified in the &#x60;CREATE DATABASE&#x60; statement. This name can be passed to other API methods to identify the database. | [optional] 
**reconciling** | **bool** | Output only. If true, the database is being updated. If false, there are no ongoing update operations for the database. | [optional] [readonly] 
**restore_info** | [**RestoreInfo**](RestoreInfo.md) |  | [optional] 
**state** | **str** | Output only. The current database state. | [optional] [readonly] 
**version_retention_period** | **str** | Output only. The period in which Cloud Spanner retains all versions of data for the database. This is the same as the value of version_retention_period database option set using UpdateDatabaseDdl. Defaults to 1 hour, if not set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database import Database

# TODO update the JSON string below
json = "{}"
# create an instance of Database from a JSON string
database_instance = Database.from_json(json)
# print the JSON string representation of the object
print(Database.to_json())

# convert the object into a dict
database_dict = database_instance.to_dict()
# create an instance of Database from a dict
database_from_dict = Database.from_dict(database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


