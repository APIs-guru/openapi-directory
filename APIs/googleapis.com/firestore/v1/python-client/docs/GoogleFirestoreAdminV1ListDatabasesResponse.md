# GoogleFirestoreAdminV1ListDatabasesResponse

The list of databases for a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databases** | [**List[GoogleFirestoreAdminV1Database]**](GoogleFirestoreAdminV1Database.md) | The databases in the project. | [optional] 
**unreachable** | **List[str]** | In the event that data about individual databases cannot be listed they will be recorded here. An example entry might be: projects/some_project/locations/some_location This can happen if the Cloud Region that the Database resides in is currently unavailable. In this case we can&#39;t fetch all the details about the database. You may be able to get a more detailed error message (or possibly fetch the resource) by sending a &#39;Get&#39; request for the resource or a &#39;List&#39; request for the specific location. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_list_databases_response import GoogleFirestoreAdminV1ListDatabasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1ListDatabasesResponse from a JSON string
google_firestore_admin_v1_list_databases_response_instance = GoogleFirestoreAdminV1ListDatabasesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1ListDatabasesResponse.to_json())

# convert the object into a dict
google_firestore_admin_v1_list_databases_response_dict = google_firestore_admin_v1_list_databases_response_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1ListDatabasesResponse from a dict
google_firestore_admin_v1_list_databases_response_from_dict = GoogleFirestoreAdminV1ListDatabasesResponse.from_dict(google_firestore_admin_v1_list_databases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


