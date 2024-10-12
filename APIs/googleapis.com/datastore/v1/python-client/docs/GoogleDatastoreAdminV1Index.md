# GoogleDatastoreAdminV1Index

Datastore composite index definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor** | **str** | Required. The index&#39;s ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED. | [optional] 
**index_id** | **str** | Output only. The resource ID of the index. | [optional] [readonly] 
**kind** | **str** | Required. The entity kind to which this index applies. | [optional] 
**project_id** | **str** | Output only. Project ID. | [optional] [readonly] 
**properties** | [**List[GoogleDatastoreAdminV1IndexedProperty]**](GoogleDatastoreAdminV1IndexedProperty.md) | Required. An ordered sequence of property names and their index attributes. Requires: * A maximum of 100 properties. | [optional] 
**state** | **str** | Output only. The state of the index. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_index import GoogleDatastoreAdminV1Index

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1Index from a JSON string
google_datastore_admin_v1_index_instance = GoogleDatastoreAdminV1Index.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1Index.to_json())

# convert the object into a dict
google_datastore_admin_v1_index_dict = google_datastore_admin_v1_index_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1Index from a dict
google_datastore_admin_v1_index_from_dict = GoogleDatastoreAdminV1Index.from_dict(google_datastore_admin_v1_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


