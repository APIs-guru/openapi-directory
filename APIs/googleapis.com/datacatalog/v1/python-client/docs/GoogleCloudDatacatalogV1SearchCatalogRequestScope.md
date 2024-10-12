# GoogleCloudDatacatalogV1SearchCatalogRequestScope

The criteria that select the subspace used for query matching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_gcp_public_datasets** | **bool** | If &#x60;true&#x60;, include Google Cloud public datasets in search results. By default, they are excluded. See [Google Cloud Public Datasets](/public-datasets) for more information. | [optional] 
**include_org_ids** | **List[str]** | The list of organization IDs to search within. To find your organization ID, follow the steps from [Creating and managing organizations] (/resource-manager/docs/creating-managing-organization). | [optional] 
**include_project_ids** | **List[str]** | The list of project IDs to search within. For more information on the distinction between project names, IDs, and numbers, see [Projects](/docs/overview/#projects). | [optional] 
**include_public_tag_templates** | **bool** | Optional. This field is deprecated. The search mechanism for public and private tag templates is the same. | [optional] 
**restricted_locations** | **List[str]** | Optional. The list of locations to search within. If empty, all locations are searched. Returns an error if any location in the list isn&#39;t one of the [Supported regions](https://cloud.google.com/data-catalog/docs/concepts/regions#supported_regions). If a location is unreachable, its name is returned in the &#x60;SearchCatalogResponse.unreachable&#x60; field. To get additional information on the error, repeat the search request and set the location name as the value of this parameter. | [optional] 
**starred_only** | **bool** | Optional. If &#x60;true&#x60;, search only among starred entries. By default, all results are returned, starred or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_search_catalog_request_scope import GoogleCloudDatacatalogV1SearchCatalogRequestScope

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SearchCatalogRequestScope from a JSON string
google_cloud_datacatalog_v1_search_catalog_request_scope_instance = GoogleCloudDatacatalogV1SearchCatalogRequestScope.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SearchCatalogRequestScope.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_search_catalog_request_scope_dict = google_cloud_datacatalog_v1_search_catalog_request_scope_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SearchCatalogRequestScope from a dict
google_cloud_datacatalog_v1_search_catalog_request_scope_from_dict = GoogleCloudDatacatalogV1SearchCatalogRequestScope.from_dict(google_cloud_datacatalog_v1_search_catalog_request_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


