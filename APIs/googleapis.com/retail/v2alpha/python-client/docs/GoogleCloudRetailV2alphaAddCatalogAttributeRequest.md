# GoogleCloudRetailV2alphaAddCatalogAttributeRequest

Request for CatalogService.AddCatalogAttribute method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_attribute** | [**GoogleCloudRetailV2alphaCatalogAttribute**](GoogleCloudRetailV2alphaCatalogAttribute.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_add_catalog_attribute_request import GoogleCloudRetailV2alphaAddCatalogAttributeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaAddCatalogAttributeRequest from a JSON string
google_cloud_retail_v2alpha_add_catalog_attribute_request_instance = GoogleCloudRetailV2alphaAddCatalogAttributeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaAddCatalogAttributeRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_add_catalog_attribute_request_dict = google_cloud_retail_v2alpha_add_catalog_attribute_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaAddCatalogAttributeRequest from a dict
google_cloud_retail_v2alpha_add_catalog_attribute_request_from_dict = GoogleCloudRetailV2alphaAddCatalogAttributeRequest.from_dict(google_cloud_retail_v2alpha_add_catalog_attribute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


