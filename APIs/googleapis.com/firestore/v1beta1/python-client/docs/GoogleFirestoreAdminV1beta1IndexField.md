# GoogleFirestoreAdminV1beta1IndexField

A field of an index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_path** | **str** | The path of the field. Must match the field path specification described by google.firestore.v1beta1.Document.fields. Special field path &#x60;__name__&#x60; may be used by itself or at the end of a path. &#x60;__type__&#x60; may be used only at the end of path. | [optional] 
**mode** | **str** | The field&#39;s mode. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_index_field import GoogleFirestoreAdminV1beta1IndexField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1IndexField from a JSON string
google_firestore_admin_v1beta1_index_field_instance = GoogleFirestoreAdminV1beta1IndexField.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1IndexField.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_index_field_dict = google_firestore_admin_v1beta1_index_field_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1IndexField from a dict
google_firestore_admin_v1beta1_index_field_from_dict = GoogleFirestoreAdminV1beta1IndexField.from_dict(google_firestore_admin_v1beta1_index_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


