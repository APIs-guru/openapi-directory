# GoogleDatastoreAdminV1beta1EntityFilter

Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kinds** | **List[str]** | If empty, then this represents all kinds. | [optional] 
**namespace_ids** | **List[str]** | An empty list represents all namespaces. This is the preferred usage for projects that don&#39;t use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn&#39;t want to include them. Each namespace in this list must be unique. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1beta1_entity_filter import GoogleDatastoreAdminV1beta1EntityFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1beta1EntityFilter from a JSON string
google_datastore_admin_v1beta1_entity_filter_instance = GoogleDatastoreAdminV1beta1EntityFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1beta1EntityFilter.to_json())

# convert the object into a dict
google_datastore_admin_v1beta1_entity_filter_dict = google_datastore_admin_v1beta1_entity_filter_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1beta1EntityFilter from a dict
google_datastore_admin_v1beta1_entity_filter_from_dict = GoogleDatastoreAdminV1beta1EntityFilter.from_dict(google_datastore_admin_v1beta1_entity_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


