# GoogleDatastoreAdminV1IndexedProperty

A property of an index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | Required. The indexed property&#39;s direction. Must not be DIRECTION_UNSPECIFIED. | [optional] 
**name** | **str** | Required. The property name to index. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_indexed_property import GoogleDatastoreAdminV1IndexedProperty

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1IndexedProperty from a JSON string
google_datastore_admin_v1_indexed_property_instance = GoogleDatastoreAdminV1IndexedProperty.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1IndexedProperty.to_json())

# convert the object into a dict
google_datastore_admin_v1_indexed_property_dict = google_datastore_admin_v1_indexed_property_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1IndexedProperty from a dict
google_datastore_admin_v1_indexed_property_from_dict = GoogleDatastoreAdminV1IndexedProperty.from_dict(google_datastore_admin_v1_indexed_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


