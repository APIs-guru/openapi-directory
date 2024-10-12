# GoogleCloudDatacatalogV1ListEntriesResponse

Response message for ListEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[GoogleCloudDatacatalogV1Entry]**](GoogleCloudDatacatalogV1Entry.md) | Entry details. | [optional] 
**next_page_token** | **str** | Pagination token of the next results page. Empty if there are no more items in results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_list_entries_response import GoogleCloudDatacatalogV1ListEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ListEntriesResponse from a JSON string
google_cloud_datacatalog_v1_list_entries_response_instance = GoogleCloudDatacatalogV1ListEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ListEntriesResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_list_entries_response_dict = google_cloud_datacatalog_v1_list_entries_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ListEntriesResponse from a dict
google_cloud_datacatalog_v1_list_entries_response_from_dict = GoogleCloudDatacatalogV1ListEntriesResponse.from_dict(google_cloud_datacatalog_v1_list_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


