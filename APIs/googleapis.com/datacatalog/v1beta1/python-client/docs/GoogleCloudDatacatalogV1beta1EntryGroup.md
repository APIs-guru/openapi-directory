# GoogleCloudDatacatalogV1beta1EntryGroup

EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_catalog_timestamps** | [**GoogleCloudDatacatalogV1beta1SystemTimestamps**](GoogleCloudDatacatalogV1beta1SystemTimestamps.md) |  | [optional] 
**description** | **str** | Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string. | [optional] 
**display_name** | **str** | A short name to identify the entry group, for example, \&quot;analytics data - jan 2011\&quot;. Default value is an empty string. | [optional] 
**name** | **str** | The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_entry_group import GoogleCloudDatacatalogV1beta1EntryGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1EntryGroup from a JSON string
google_cloud_datacatalog_v1beta1_entry_group_instance = GoogleCloudDatacatalogV1beta1EntryGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1EntryGroup.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_entry_group_dict = google_cloud_datacatalog_v1beta1_entry_group_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1EntryGroup from a dict
google_cloud_datacatalog_v1beta1_entry_group_from_dict = GoogleCloudDatacatalogV1beta1EntryGroup.from_dict(google_cloud_datacatalog_v1beta1_entry_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


