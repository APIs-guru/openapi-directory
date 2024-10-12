# GoogleFirestoreAdminV1Index

Cloud Firestore indexes enable simple and complex queries against documents in a database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_scope** | **str** | The API scope supported by this index. | [optional] 
**fields** | [**List[GoogleFirestoreAdminV1IndexField]**](GoogleFirestoreAdminV1IndexField.md) | The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path &#x60;__name__&#x60;. If, on creation, &#x60;__name__&#x60; was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the &#x60;__name__&#x60; will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field. | [optional] 
**name** | **str** | Output only. A server defined name for this index. The form of this name for composite indexes will be: &#x60;projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}&#x60; For single field indexes, this field will be empty. | [optional] 
**query_scope** | **str** | Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index. | [optional] 
**state** | **str** | Output only. The serving state of the index. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_index import GoogleFirestoreAdminV1Index

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1Index from a JSON string
google_firestore_admin_v1_index_instance = GoogleFirestoreAdminV1Index.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1Index.to_json())

# convert the object into a dict
google_firestore_admin_v1_index_dict = google_firestore_admin_v1_index_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1Index from a dict
google_firestore_admin_v1_index_from_dict = GoogleFirestoreAdminV1Index.from_dict(google_firestore_admin_v1_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


