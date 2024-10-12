# GoogleCloudDatacatalogV1SearchCatalogResult

Result in the response to a search request. Each result captures details of one entry that matches the search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Entry description that can consist of several sentences or paragraphs that describe entry contents. | [optional] 
**display_name** | **str** | The display name of the result. | [optional] 
**fully_qualified_name** | **str** | Fully qualified name (FQN) of the resource. FQNs take two forms: * For non-regionalized resources: &#x60;{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}&#x60; * For regionalized resources: &#x60;{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}&#x60; Example for a DPMS table: &#x60;dataproc_metastore:PROJECT_ID.LOCATION_ID.INSTANCE_ID.DATABASE_ID.TABLE_ID&#x60; | [optional] 
**integrated_system** | **str** | Output only. The source system that Data Catalog automatically integrates with, such as BigQuery, Cloud Pub/Sub, or Dataproc Metastore. | [optional] [readonly] 
**linked_resource** | **str** | The full name of the Google Cloud resource the entry belongs to. For more information, see [Full Resource Name] (/apis/design/resource_names#full_resource_name). Example: &#x60;//bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID&#x60; | [optional] 
**modify_time** | **str** | The last modification timestamp of the entry in the source system. | [optional] 
**relative_resource_name** | **str** | The relative name of the resource in URL format. Examples: * &#x60;projects/{PROJECT_ID}/locations/{LOCATION_ID}/entryGroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}&#x60; * &#x60;projects/{PROJECT_ID}/tagTemplates/{TAG_TEMPLATE_ID}&#x60; | [optional] 
**search_result_subtype** | **str** | Sub-type of the search result. A dot-delimited full type of the resource. The same type you specify in the &#x60;type&#x60; search predicate. Examples: &#x60;entry.table&#x60;, &#x60;entry.dataStream&#x60;, &#x60;tagTemplate&#x60;. | [optional] 
**search_result_type** | **str** | Type of the search result. You can use this field to determine which get method to call to fetch the full resource. | [optional] 
**user_specified_system** | **str** | Custom source system that you can manually integrate Data Catalog with. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_search_catalog_result import GoogleCloudDatacatalogV1SearchCatalogResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SearchCatalogResult from a JSON string
google_cloud_datacatalog_v1_search_catalog_result_instance = GoogleCloudDatacatalogV1SearchCatalogResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SearchCatalogResult.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_search_catalog_result_dict = google_cloud_datacatalog_v1_search_catalog_result_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SearchCatalogResult from a dict
google_cloud_datacatalog_v1_search_catalog_result_from_dict = GoogleCloudDatacatalogV1SearchCatalogResult.from_dict(google_cloud_datacatalog_v1_search_catalog_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


