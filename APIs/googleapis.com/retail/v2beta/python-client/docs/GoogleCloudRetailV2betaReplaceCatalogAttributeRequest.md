# GoogleCloudRetailV2betaReplaceCatalogAttributeRequest

Request for CatalogService.ReplaceCatalogAttribute method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_attribute** | [**GoogleCloudRetailV2betaCatalogAttribute**](GoogleCloudRetailV2betaCatalogAttribute.md) |  | [optional] 
**update_mask** | **str** | Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_replace_catalog_attribute_request import GoogleCloudRetailV2betaReplaceCatalogAttributeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaReplaceCatalogAttributeRequest from a JSON string
google_cloud_retail_v2beta_replace_catalog_attribute_request_instance = GoogleCloudRetailV2betaReplaceCatalogAttributeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaReplaceCatalogAttributeRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_replace_catalog_attribute_request_dict = google_cloud_retail_v2beta_replace_catalog_attribute_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaReplaceCatalogAttributeRequest from a dict
google_cloud_retail_v2beta_replace_catalog_attribute_request_from_dict = GoogleCloudRetailV2betaReplaceCatalogAttributeRequest.from_dict(google_cloud_retail_v2beta_replace_catalog_attribute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


