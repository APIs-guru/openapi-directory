# GoogleDatastoreAdminV1ListIndexesResponse

The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indexes** | [**List[GoogleDatastoreAdminV1Index]**](GoogleDatastoreAdminV1Index.md) | The indexes. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_list_indexes_response import GoogleDatastoreAdminV1ListIndexesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1ListIndexesResponse from a JSON string
google_datastore_admin_v1_list_indexes_response_instance = GoogleDatastoreAdminV1ListIndexesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1ListIndexesResponse.to_json())

# convert the object into a dict
google_datastore_admin_v1_list_indexes_response_dict = google_datastore_admin_v1_list_indexes_response_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1ListIndexesResponse from a dict
google_datastore_admin_v1_list_indexes_response_from_dict = GoogleDatastoreAdminV1ListIndexesResponse.from_dict(google_datastore_admin_v1_list_indexes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


