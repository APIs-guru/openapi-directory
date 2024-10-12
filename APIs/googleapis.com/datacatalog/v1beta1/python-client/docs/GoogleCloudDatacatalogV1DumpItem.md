# GoogleCloudDatacatalogV1DumpItem

Wrapper for any item that can be contained in the dump.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tagged_entry** | [**GoogleCloudDatacatalogV1TaggedEntry**](GoogleCloudDatacatalogV1TaggedEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_dump_item import GoogleCloudDatacatalogV1DumpItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DumpItem from a JSON string
google_cloud_datacatalog_v1_dump_item_instance = GoogleCloudDatacatalogV1DumpItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DumpItem.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_dump_item_dict = google_cloud_datacatalog_v1_dump_item_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DumpItem from a dict
google_cloud_datacatalog_v1_dump_item_from_dict = GoogleCloudDatacatalogV1DumpItem.from_dict(google_cloud_datacatalog_v1_dump_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


