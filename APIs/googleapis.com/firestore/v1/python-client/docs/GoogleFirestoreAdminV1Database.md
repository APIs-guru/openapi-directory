# GoogleFirestoreAdminV1Database

A Cloud Firestore Database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_integration_mode** | **str** | The App Engine integration mode to use for this database. | [optional] 
**concurrency_mode** | **str** | The concurrency control mode to use for this database. | [optional] 
**create_time** | **str** | Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time. | [optional] [readonly] 
**delete_protection_state** | **str** | State of delete protection for the database. | [optional] 
**earliest_version_time** | **str** | Output only. The earliest timestamp at which older versions of the data can be read from the database. See [version_retention_period] above; this field is populated with &#x60;now - version_retention_period&#x60;. This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery. | [optional] [readonly] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**key_prefix** | **str** | Output only. The key_prefix for this database. This key_prefix is used, in combination with the project id (\&quot;~\&quot;) to construct the application id that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes. This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo). | [optional] [readonly] 
**location_id** | **str** | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. | [optional] 
**name** | **str** | The resource name of the Database. Format: &#x60;projects/{project}/databases/{database}&#x60; | [optional] 
**point_in_time_recovery_enablement** | **str** | Whether to enable the PITR feature on this database. | [optional] 
**type** | **str** | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. | [optional] 
**uid** | **str** | Output only. The system-generated UUID4 for this Database. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database. | [optional] [readonly] 
**version_retention_period** | **str** | Output only. The period during which past versions of data are retained in the database. Any read or query can specify a &#x60;read_time&#x60; within this window, and will read the state of the database at that time. If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_database import GoogleFirestoreAdminV1Database

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1Database from a JSON string
google_firestore_admin_v1_database_instance = GoogleFirestoreAdminV1Database.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1Database.to_json())

# convert the object into a dict
google_firestore_admin_v1_database_dict = google_firestore_admin_v1_database_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1Database from a dict
google_firestore_admin_v1_database_from_dict = GoogleFirestoreAdminV1Database.from_dict(google_firestore_admin_v1_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


