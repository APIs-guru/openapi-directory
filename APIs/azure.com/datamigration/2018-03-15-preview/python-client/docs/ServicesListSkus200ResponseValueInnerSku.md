# ServicesListSkus200ResponseValueInnerSku

SKU name, tier, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **str** | SKU family | [optional] 
**name** | **str** | The name of the SKU | [optional] 
**size** | **str** | SKU size | [optional] 
**tier** | **str** | The tier of the SKU, such as \&quot;Free\&quot;, \&quot;Basic\&quot;, \&quot;Standard\&quot;, or \&quot;Premium\&quot; | [optional] 

## Example

```python
from openapi_client.models.services_list_skus200_response_value_inner_sku import ServicesListSkus200ResponseValueInnerSku

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesListSkus200ResponseValueInnerSku from a JSON string
services_list_skus200_response_value_inner_sku_instance = ServicesListSkus200ResponseValueInnerSku.from_json(json)
# print the JSON string representation of the object
print(ServicesListSkus200ResponseValueInnerSku.to_json())

# convert the object into a dict
services_list_skus200_response_value_inner_sku_dict = services_list_skus200_response_value_inner_sku_instance.to_dict()
# create an instance of ServicesListSkus200ResponseValueInnerSku from a dict
services_list_skus200_response_value_inner_sku_from_dict = ServicesListSkus200ResponseValueInnerSku.from_dict(services_list_skus200_response_value_inner_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


