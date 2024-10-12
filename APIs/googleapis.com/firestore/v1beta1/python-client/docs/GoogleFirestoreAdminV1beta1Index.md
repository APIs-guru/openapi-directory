# GoogleFirestoreAdminV1beta1Index

An index definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_id** | **str** | The collection ID to which this index applies. Required. | [optional] 
**fields** | [**List[GoogleFirestoreAdminV1beta1IndexField]**](GoogleFirestoreAdminV1beta1IndexField.md) | The fields to index. | [optional] 
**name** | **str** | The resource name of the index. Output only. | [optional] 
**state** | **str** | The state of the index. Output only. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_index import GoogleFirestoreAdminV1beta1Index

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1Index from a JSON string
google_firestore_admin_v1beta1_index_instance = GoogleFirestoreAdminV1beta1Index.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1Index.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_index_dict = google_firestore_admin_v1beta1_index_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1Index from a dict
google_firestore_admin_v1beta1_index_from_dict = GoogleFirestoreAdminV1beta1Index.from_dict(google_firestore_admin_v1beta1_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


