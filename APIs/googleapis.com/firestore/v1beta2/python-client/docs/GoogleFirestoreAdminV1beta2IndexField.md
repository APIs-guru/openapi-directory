# GoogleFirestoreAdminV1beta2IndexField

A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_config** | **str** | Indicates that this field supports operations on &#x60;array_value&#x60;s. | [optional] 
**field_path** | **str** | Can be __name__. For single field indexes, this must match the name of the field or may be omitted. | [optional] 
**order** | **str** | Indicates that this field supports ordering by the specified order or comparing using &#x3D;, &lt;, &lt;&#x3D;, &gt;, &gt;&#x3D;. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta2_index_field import GoogleFirestoreAdminV1beta2IndexField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta2IndexField from a JSON string
google_firestore_admin_v1beta2_index_field_instance = GoogleFirestoreAdminV1beta2IndexField.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta2IndexField.to_json())

# convert the object into a dict
google_firestore_admin_v1beta2_index_field_dict = google_firestore_admin_v1beta2_index_field_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta2IndexField from a dict
google_firestore_admin_v1beta2_index_field_from_dict = GoogleFirestoreAdminV1beta2IndexField.from_dict(google_firestore_admin_v1beta2_index_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


