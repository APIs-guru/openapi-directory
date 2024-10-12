# GoogleFirestoreAdminV1ListBackupsResponse

The response for FirestoreAdmin.ListBackups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backups** | [**List[GoogleFirestoreAdminV1Backup]**](GoogleFirestoreAdminV1Backup.md) | List of all backups for the project. Ordered by &#x60;location ASC, create_time DESC, name ASC&#x60;. | [optional] 
**unreachable** | **List[str]** | List of locations that existing backups were not able to be fetched from. Instead of failing the entire requests when a single location is unreachable, this response returns a partial result set and list of locations unable to be reached here. The request can be retried against a single location to get a concrete error. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_list_backups_response import GoogleFirestoreAdminV1ListBackupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1ListBackupsResponse from a JSON string
google_firestore_admin_v1_list_backups_response_instance = GoogleFirestoreAdminV1ListBackupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1ListBackupsResponse.to_json())

# convert the object into a dict
google_firestore_admin_v1_list_backups_response_dict = google_firestore_admin_v1_list_backups_response_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1ListBackupsResponse from a dict
google_firestore_admin_v1_list_backups_response_from_dict = GoogleFirestoreAdminV1ListBackupsResponse.from_dict(google_firestore_admin_v1_list_backups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


