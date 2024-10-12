# GoogleCloudDatacatalogV1ModifyEntryOverviewRequest

Request message for ModifyEntryOverview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entry_overview** | [**GoogleCloudDatacatalogV1EntryOverview**](GoogleCloudDatacatalogV1EntryOverview.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_modify_entry_overview_request import GoogleCloudDatacatalogV1ModifyEntryOverviewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ModifyEntryOverviewRequest from a JSON string
google_cloud_datacatalog_v1_modify_entry_overview_request_instance = GoogleCloudDatacatalogV1ModifyEntryOverviewRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ModifyEntryOverviewRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_modify_entry_overview_request_dict = google_cloud_datacatalog_v1_modify_entry_overview_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ModifyEntryOverviewRequest from a dict
google_cloud_datacatalog_v1_modify_entry_overview_request_from_dict = GoogleCloudDatacatalogV1ModifyEntryOverviewRequest.from_dict(google_cloud_datacatalog_v1_modify_entry_overview_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


