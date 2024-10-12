# DownloadedProductsGet200ResponseProperties

Properties for aggregate usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_package_blob_sas_uri** | **str** | The URI to the .azpkg file that provides information required for showing product in the gallery. | [optional] [readonly] 
**legal_terms** | **str** | Legal terms for the product. | [optional] 
**links** | [**List[DownloadedProductsGet200ResponsePropertiesLinksInner]**](DownloadedProductsGet200ResponsePropertiesLinksInner.md) | List of product links. | [optional] 
**privacy_policy** | **str** | Privacy policy of the product. | [optional] 
**product_details_properties** | **object** | Product information. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**vm_extension_type** | **str** | Extension type of the VM. | [optional] 

## Example

```python
from openapi_client.models.downloaded_products_get200_response_properties import DownloadedProductsGet200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadedProductsGet200ResponseProperties from a JSON string
downloaded_products_get200_response_properties_instance = DownloadedProductsGet200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(DownloadedProductsGet200ResponseProperties.to_json())

# convert the object into a dict
downloaded_products_get200_response_properties_dict = downloaded_products_get200_response_properties_instance.to_dict()
# create an instance of DownloadedProductsGet200ResponseProperties from a dict
downloaded_products_get200_response_properties_from_dict = DownloadedProductsGet200ResponseProperties.from_dict(downloaded_products_get200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


