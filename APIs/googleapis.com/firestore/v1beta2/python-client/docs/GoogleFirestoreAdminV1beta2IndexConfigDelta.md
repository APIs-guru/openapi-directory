# GoogleFirestoreAdminV1beta2IndexConfigDelta

Information about an index configuration change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_type** | **str** | Specifies how the index is changing. | [optional] 
**index** | [**GoogleFirestoreAdminV1beta2Index**](GoogleFirestoreAdminV1beta2Index.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta2_index_config_delta import GoogleFirestoreAdminV1beta2IndexConfigDelta

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta2IndexConfigDelta from a JSON string
google_firestore_admin_v1beta2_index_config_delta_instance = GoogleFirestoreAdminV1beta2IndexConfigDelta.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta2IndexConfigDelta.to_json())

# convert the object into a dict
google_firestore_admin_v1beta2_index_config_delta_dict = google_firestore_admin_v1beta2_index_config_delta_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta2IndexConfigDelta from a dict
google_firestore_admin_v1beta2_index_config_delta_from_dict = GoogleFirestoreAdminV1beta2IndexConfigDelta.from_dict(google_firestore_admin_v1beta2_index_config_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


