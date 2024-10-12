# GoogleFirestoreAdminV1ListIndexesResponse

The response for FirestoreAdmin.ListIndexes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indexes** | [**List[GoogleFirestoreAdminV1Index]**](GoogleFirestoreAdminV1Index.md) | The requested indexes. | [optional] 
**next_page_token** | **str** | A page token that may be used to request another page of results. If blank, this is the last page. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_list_indexes_response import GoogleFirestoreAdminV1ListIndexesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1ListIndexesResponse from a JSON string
google_firestore_admin_v1_list_indexes_response_instance = GoogleFirestoreAdminV1ListIndexesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1ListIndexesResponse.to_json())

# convert the object into a dict
google_firestore_admin_v1_list_indexes_response_dict = google_firestore_admin_v1_list_indexes_response_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1ListIndexesResponse from a dict
google_firestore_admin_v1_list_indexes_response_from_dict = GoogleFirestoreAdminV1ListIndexesResponse.from_dict(google_firestore_admin_v1_list_indexes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


