# ProductsDownload200ResponseProperties

Properties for aggregate usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_package_blob_sas_uri** | **str** | The URI to the .azpkg file that provides information required for showing product in the gallery. | [optional] [readonly] 
**legal_terms** | **str** | Legal terms for the product. | [optional] 
**links** | [**List[ProductsDownload200ResponsePropertiesLinksInner]**](ProductsDownload200ResponsePropertiesLinksInner.md) | List of product links. | [optional] 
**privacy_policy** | **str** | Privacy policy of the product. | [optional] 
**product_details_properties** | **object** | Product information. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**vm_extension_type** | **str** | Extension type of the VM. | [optional] 

## Example

```python
from openapi_client.models.products_download200_response_properties import ProductsDownload200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsDownload200ResponseProperties from a JSON string
products_download200_response_properties_instance = ProductsDownload200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(ProductsDownload200ResponseProperties.to_json())

# convert the object into a dict
products_download200_response_properties_dict = products_download200_response_properties_instance.to_dict()
# create an instance of ProductsDownload200ResponseProperties from a dict
products_download200_response_properties_from_dict = ProductsDownload200ResponseProperties.from_dict(products_download200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


