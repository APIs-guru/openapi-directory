# GoogleFirestoreAdminV1VectorConfig

The index configuration to support vector search operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **int** | Required. The vector dimension this configuration applies to. The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. | [optional] 
**flat** | **object** | An index that stores vectors in a flat data structure, and supports exhaustive search. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_vector_config import GoogleFirestoreAdminV1VectorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1VectorConfig from a JSON string
google_firestore_admin_v1_vector_config_instance = GoogleFirestoreAdminV1VectorConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1VectorConfig.to_json())

# convert the object into a dict
google_firestore_admin_v1_vector_config_dict = google_firestore_admin_v1_vector_config_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1VectorConfig from a dict
google_firestore_admin_v1_vector_config_from_dict = GoogleFirestoreAdminV1VectorConfig.from_dict(google_firestore_admin_v1_vector_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


