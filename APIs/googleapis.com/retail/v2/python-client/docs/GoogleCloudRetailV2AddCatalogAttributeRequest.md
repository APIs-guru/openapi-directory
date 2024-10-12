# GoogleCloudRetailV2AddCatalogAttributeRequest

Request for CatalogService.AddCatalogAttribute method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_attribute** | [**GoogleCloudRetailV2CatalogAttribute**](GoogleCloudRetailV2CatalogAttribute.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_add_catalog_attribute_request import GoogleCloudRetailV2AddCatalogAttributeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2AddCatalogAttributeRequest from a JSON string
google_cloud_retail_v2_add_catalog_attribute_request_instance = GoogleCloudRetailV2AddCatalogAttributeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2AddCatalogAttributeRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_add_catalog_attribute_request_dict = google_cloud_retail_v2_add_catalog_attribute_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2AddCatalogAttributeRequest from a dict
google_cloud_retail_v2_add_catalog_attribute_request_from_dict = GoogleCloudRetailV2AddCatalogAttributeRequest.from_dict(google_cloud_retail_v2_add_catalog_attribute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


