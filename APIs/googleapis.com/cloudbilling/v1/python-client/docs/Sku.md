# Sku

Encapsulates a single SKU in Google Cloud Platform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**Category**](Category.md) |  | [optional] 
**description** | **str** | A human readable description of the SKU, has a maximum length of 256 characters. | [optional] 
**geo_taxonomy** | [**GeoTaxonomy**](GeoTaxonomy.md) |  | [optional] 
**name** | **str** | The resource name for the SKU. Example: \&quot;services/DA34-426B-A397/skus/AA95-CD31-42FE\&quot; | [optional] 
**pricing_info** | [**List[PricingInfo]**](PricingInfo.md) | A timeline of pricing info for this SKU in chronological order. | [optional] 
**service_provider_name** | **str** | Identifies the service provider. This is &#39;Google&#39; for first party services in Google Cloud Platform. | [optional] 
**service_regions** | **List[str]** | List of service regions this SKU is offered at. Example: \&quot;asia-east1\&quot; Service regions can be found at https://cloud.google.com/about/locations/ | [optional] 
**sku_id** | **str** | The identifier for the SKU. Example: \&quot;AA95-CD31-42FE\&quot; | [optional] 

## Example

```python
from openapi_client.models.sku import Sku

# TODO update the JSON string below
json = "{}"
# create an instance of Sku from a JSON string
sku_instance = Sku.from_json(json)
# print the JSON string representation of the object
print(Sku.to_json())

# convert the object into a dict
sku_dict = sku_instance.to_dict()
# create an instance of Sku from a dict
sku_from_dict = Sku.from_dict(sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


