# GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse

Response message for ListEntryGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entry_groups** | [**List[GoogleCloudDatacatalogV1beta1EntryGroup]**](GoogleCloudDatacatalogV1beta1EntryGroup.md) | EntryGroup details. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results. It is set to empty if no items remain in results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_list_entry_groups_response import GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse from a JSON string
google_cloud_datacatalog_v1beta1_list_entry_groups_response_instance = GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_list_entry_groups_response_dict = google_cloud_datacatalog_v1beta1_list_entry_groups_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse from a dict
google_cloud_datacatalog_v1beta1_list_entry_groups_response_from_dict = GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse.from_dict(google_cloud_datacatalog_v1beta1_list_entry_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


