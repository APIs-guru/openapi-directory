# GoogleCloudDatacatalogV1EntryOverview

Entry overview fields for rich text descriptions of entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overview** | **str** | Entry overview with support for rich text. The overview must only contain Unicode characters, and should be formatted using HTML. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_entry_overview import GoogleCloudDatacatalogV1EntryOverview

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1EntryOverview from a JSON string
google_cloud_datacatalog_v1_entry_overview_instance = GoogleCloudDatacatalogV1EntryOverview.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1EntryOverview.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_entry_overview_dict = google_cloud_datacatalog_v1_entry_overview_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1EntryOverview from a dict
google_cloud_datacatalog_v1_entry_overview_from_dict = GoogleCloudDatacatalogV1EntryOverview.from_dict(google_cloud_datacatalog_v1_entry_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


