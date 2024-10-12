# GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest

Request message for BatchSearchLinkProcesses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | **List[str]** | Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the &#x60;INVALID_ARGUMENT&#x60; error. Format: &#x60;projects/{project}/locations/{location}/links/{link}&#x60;. | [optional] 
**page_size** | **int** | The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value. | [optional] 
**page_token** | **str** | The page token received from a previous &#x60;BatchSearchLinkProcesses&#x60; call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_batch_search_link_processes_request import GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest from a JSON string
google_cloud_datacatalog_lineage_v1_batch_search_link_processes_request_instance = GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_batch_search_link_processes_request_dict = google_cloud_datacatalog_lineage_v1_batch_search_link_processes_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest from a dict
google_cloud_datacatalog_lineage_v1_batch_search_link_processes_request_from_dict = GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest.from_dict(google_cloud_datacatalog_lineage_v1_batch_search_link_processes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


