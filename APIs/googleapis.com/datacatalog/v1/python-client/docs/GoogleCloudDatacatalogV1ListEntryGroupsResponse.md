# GoogleCloudDatacatalogV1ListEntryGroupsResponse

Response message for ListEntryGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entry_groups** | [**List[GoogleCloudDatacatalogV1EntryGroup]**](GoogleCloudDatacatalogV1EntryGroup.md) | Entry group details. | [optional] 
**next_page_token** | **str** | Pagination token to specify in the next call to retrieve the next page of results. Empty if there are no more items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_list_entry_groups_response import GoogleCloudDatacatalogV1ListEntryGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ListEntryGroupsResponse from a JSON string
google_cloud_datacatalog_v1_list_entry_groups_response_instance = GoogleCloudDatacatalogV1ListEntryGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ListEntryGroupsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_list_entry_groups_response_dict = google_cloud_datacatalog_v1_list_entry_groups_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ListEntryGroupsResponse from a dict
google_cloud_datacatalog_v1_list_entry_groups_response_from_dict = GoogleCloudDatacatalogV1ListEntryGroupsResponse.from_dict(google_cloud_datacatalog_v1_list_entry_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


