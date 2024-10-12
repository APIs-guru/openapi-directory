# GoogleFirestoreAdminV1ListFieldsResponse

The response for FirestoreAdmin.ListFields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[GoogleFirestoreAdminV1Field]**](GoogleFirestoreAdminV1Field.md) | The requested fields. | [optional] 
**next_page_token** | **str** | A page token that may be used to request another page of results. If blank, this is the last page. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_list_fields_response import GoogleFirestoreAdminV1ListFieldsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1ListFieldsResponse from a JSON string
google_firestore_admin_v1_list_fields_response_instance = GoogleFirestoreAdminV1ListFieldsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1ListFieldsResponse.to_json())

# convert the object into a dict
google_firestore_admin_v1_list_fields_response_dict = google_firestore_admin_v1_list_fields_response_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1ListFieldsResponse from a dict
google_firestore_admin_v1_list_fields_response_from_dict = GoogleFirestoreAdminV1ListFieldsResponse.from_dict(google_firestore_admin_v1_list_fields_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


