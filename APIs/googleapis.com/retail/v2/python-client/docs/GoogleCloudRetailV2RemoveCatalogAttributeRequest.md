# GoogleCloudRetailV2RemoveCatalogAttributeRequest

Request for CatalogService.RemoveCatalogAttribute method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The attribute name key of the CatalogAttribute to remove. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_remove_catalog_attribute_request import GoogleCloudRetailV2RemoveCatalogAttributeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2RemoveCatalogAttributeRequest from a JSON string
google_cloud_retail_v2_remove_catalog_attribute_request_instance = GoogleCloudRetailV2RemoveCatalogAttributeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2RemoveCatalogAttributeRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_remove_catalog_attribute_request_dict = google_cloud_retail_v2_remove_catalog_attribute_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2RemoveCatalogAttributeRequest from a dict
google_cloud_retail_v2_remove_catalog_attribute_request_from_dict = GoogleCloudRetailV2RemoveCatalogAttributeRequest.from_dict(google_cloud_retail_v2_remove_catalog_attribute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


