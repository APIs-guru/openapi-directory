# GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse

Response of the CatalogService.BatchRemoveCatalogAttributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_catalog_attributes** | **List[str]** | Catalog attributes that were deleted. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted. | [optional] 
**reset_catalog_attributes** | **List[str]** | Catalog attributes that were reset. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_batch_remove_catalog_attributes_response import GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse from a JSON string
google_cloud_retail_v2beta_batch_remove_catalog_attributes_response_instance = GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_batch_remove_catalog_attributes_response_dict = google_cloud_retail_v2beta_batch_remove_catalog_attributes_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse from a dict
google_cloud_retail_v2beta_batch_remove_catalog_attributes_response_from_dict = GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse.from_dict(google_cloud_retail_v2beta_batch_remove_catalog_attributes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


