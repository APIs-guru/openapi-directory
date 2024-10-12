# GoogleCloudDatacatalogLineageV1ListRunsResponse

Response message for ListRuns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token to specify as &#x60;page_token&#x60; in the next call to get the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**runs** | [**List[GoogleCloudDatacatalogLineageV1Run]**](GoogleCloudDatacatalogLineageV1Run.md) | The runs from the specified project and location. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_list_runs_response import GoogleCloudDatacatalogLineageV1ListRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1ListRunsResponse from a JSON string
google_cloud_datacatalog_lineage_v1_list_runs_response_instance = GoogleCloudDatacatalogLineageV1ListRunsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1ListRunsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_list_runs_response_dict = google_cloud_datacatalog_lineage_v1_list_runs_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1ListRunsResponse from a dict
google_cloud_datacatalog_lineage_v1_list_runs_response_from_dict = GoogleCloudDatacatalogLineageV1ListRunsResponse.from_dict(google_cloud_datacatalog_lineage_v1_list_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


