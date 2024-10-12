# GoogleCloudDatacatalogV1EntryGroup

Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_catalog_timestamps** | [**GoogleCloudDatacatalogV1SystemTimestamps**](GoogleCloudDatacatalogV1SystemTimestamps.md) |  | [optional] 
**description** | **str** | Entry group description. Can consist of several sentences or paragraphs that describe the entry group contents. Default value is an empty string. | [optional] 
**display_name** | **str** | A short name to identify the entry group, for example, \&quot;analytics data - jan 2011\&quot;. Default value is an empty string. | [optional] 
**name** | **str** | The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_entry_group import GoogleCloudDatacatalogV1EntryGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1EntryGroup from a JSON string
google_cloud_datacatalog_v1_entry_group_instance = GoogleCloudDatacatalogV1EntryGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1EntryGroup.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_entry_group_dict = google_cloud_datacatalog_v1_entry_group_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1EntryGroup from a dict
google_cloud_datacatalog_v1_entry_group_from_dict = GoogleCloudDatacatalogV1EntryGroup.from_dict(google_cloud_datacatalog_v1_entry_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


