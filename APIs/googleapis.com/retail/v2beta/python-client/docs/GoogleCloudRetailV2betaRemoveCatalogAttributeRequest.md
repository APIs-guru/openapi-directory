# GoogleCloudRetailV2betaRemoveCatalogAttributeRequest

Request for CatalogService.RemoveCatalogAttribute method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The attribute name key of the CatalogAttribute to remove. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_remove_catalog_attribute_request import GoogleCloudRetailV2betaRemoveCatalogAttributeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaRemoveCatalogAttributeRequest from a JSON string
google_cloud_retail_v2beta_remove_catalog_attribute_request_instance = GoogleCloudRetailV2betaRemoveCatalogAttributeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaRemoveCatalogAttributeRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_remove_catalog_attribute_request_dict = google_cloud_retail_v2beta_remove_catalog_attribute_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaRemoveCatalogAttributeRequest from a dict
google_cloud_retail_v2beta_remove_catalog_attribute_request_from_dict = GoogleCloudRetailV2betaRemoveCatalogAttributeRequest.from_dict(google_cloud_retail_v2beta_remove_catalog_attribute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


