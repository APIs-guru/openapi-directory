# GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope

The criteria that select the subspace used for query matching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_gcp_public_datasets** | **bool** | If &#x60;true&#x60;, include Google Cloud public datasets in the search results. Info on Google Cloud public datasets is available at https://cloud.google.com/public-datasets/. By default, Google Cloud public datasets are excluded. | [optional] 
**include_org_ids** | **List[str]** | The list of organization IDs to search within. To find your organization ID, follow instructions in https://cloud.google.com/resource-manager/docs/creating-managing-organization. | [optional] 
**include_project_ids** | **List[str]** | The list of project IDs to search within. To learn more about the distinction between project names/IDs/numbers, go to https://cloud.google.com/docs/overview/#projects. | [optional] 
**restricted_locations** | **List[str]** | Optional. The list of locations to search within. 1. If empty, search will be performed in all locations; 2. If any of the locations are NOT in the valid locations list, error will be returned; 3. Otherwise, search only the given locations for matching results. Typical usage is to leave this field empty. When a location is unreachable as returned in the &#x60;SearchCatalogResponse.unreachable&#x60; field, users can repeat the search request with this parameter set to get additional information on the error. Valid locations: * asia-east1 * asia-east2 * asia-northeast1 * asia-northeast2 * asia-northeast3 * asia-south1 * asia-southeast1 * australia-southeast1 * eu * europe-north1 * europe-west1 * europe-west2 * europe-west3 * europe-west4 * europe-west6 * global * northamerica-northeast1 * southamerica-east1 * us * us-central1 * us-east1 * us-east4 * us-west1 * us-west2 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_search_catalog_request_scope import GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope from a JSON string
google_cloud_datacatalog_v1beta1_search_catalog_request_scope_instance = GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_search_catalog_request_scope_dict = google_cloud_datacatalog_v1beta1_search_catalog_request_scope_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope from a dict
google_cloud_datacatalog_v1beta1_search_catalog_request_scope_from_dict = GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope.from_dict(google_cloud_datacatalog_v1beta1_search_catalog_request_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


