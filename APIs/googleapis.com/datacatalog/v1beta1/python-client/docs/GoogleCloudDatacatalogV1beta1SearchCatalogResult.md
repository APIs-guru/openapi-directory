# GoogleCloudDatacatalogV1beta1SearchCatalogResult

A result that appears in the response of a search request. Each result captures details of one entry that matches the search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_resource** | **str** | The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example: * &#x60;//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId&#x60; | [optional] 
**modify_time** | **str** | Last-modified timestamp of the entry from the managing system. | [optional] 
**relative_resource_name** | **str** | The relative resource name of the resource in URL format. Examples: * &#x60;projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}&#x60; * &#x60;projects/{project_id}/tagTemplates/{tag_template_id}&#x60; | [optional] 
**search_result_subtype** | **str** | Sub-type of the search result. This is a dot-delimited description of the resource&#39;s full type, and is the same as the value callers would provide in the \&quot;type\&quot; search facet. Examples: &#x60;entry.table&#x60;, &#x60;entry.dataStream&#x60;, &#x60;tagTemplate&#x60;. | [optional] 
**search_result_type** | **str** | Type of the search result. This field can be used to determine which Get method to call to fetch the full resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_search_catalog_result import GoogleCloudDatacatalogV1beta1SearchCatalogResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogResult from a JSON string
google_cloud_datacatalog_v1beta1_search_catalog_result_instance = GoogleCloudDatacatalogV1beta1SearchCatalogResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1SearchCatalogResult.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_search_catalog_result_dict = google_cloud_datacatalog_v1beta1_search_catalog_result_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogResult from a dict
google_cloud_datacatalog_v1beta1_search_catalog_result_from_dict = GoogleCloudDatacatalogV1beta1SearchCatalogResult.from_dict(google_cloud_datacatalog_v1beta1_search_catalog_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


