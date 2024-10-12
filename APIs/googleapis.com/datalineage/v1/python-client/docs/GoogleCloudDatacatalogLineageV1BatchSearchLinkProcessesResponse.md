# GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse

Response message for BatchSearchLinkProcesses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token to specify as &#x60;page_token&#x60; in the subsequent call to get the next page. Omitted if there are no more pages in the response. | [optional] 
**process_links** | [**List[GoogleCloudDatacatalogLineageV1ProcessLinks]**](GoogleCloudDatacatalogLineageV1ProcessLinks.md) | An array of processes associated with the specified links. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_batch_search_link_processes_response import GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse from a JSON string
google_cloud_datacatalog_lineage_v1_batch_search_link_processes_response_instance = GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_batch_search_link_processes_response_dict = google_cloud_datacatalog_lineage_v1_batch_search_link_processes_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse from a dict
google_cloud_datacatalog_lineage_v1_batch_search_link_processes_response_from_dict = GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse.from_dict(google_cloud_datacatalog_lineage_v1_batch_search_link_processes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


