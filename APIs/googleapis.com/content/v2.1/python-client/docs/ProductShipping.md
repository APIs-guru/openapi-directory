# ProductShipping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The CLDR territory code of the country to which an item will ship. | [optional] 
**location_group_name** | **str** | The location where the shipping is applicable, represented by a location group name. | [optional] 
**location_id** | **str** | The numeric ID of a location that the shipping rate applies to as defined in the Google Ads API. | [optional] 
**max_handling_time** | **str** | Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it&#39;s received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. | [optional] 
**max_transit_time** | **str** | Maximum transit time (inclusive) between when the order has shipped and when it&#39;s delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. | [optional] 
**min_handling_time** | **str** | Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it&#39;s received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it&#39;s not required if maxHandlingTime is present. | [optional] 
**min_transit_time** | **str** | Minimum transit time (inclusive) between when the order has shipped and when it&#39;s delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it&#39;s not required if maxTransitTime is present. | [optional] 
**postal_code** | **str** | The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**region** | **str** | The geographic region to which a shipping rate applies. | [optional] 
**service** | **str** | A free-form description of the service class or delivery speed. | [optional] 

## Example

```python
from openapi_client.models.product_shipping import ProductShipping

# TODO update the JSON string below
json = "{}"
# create an instance of ProductShipping from a JSON string
product_shipping_instance = ProductShipping.from_json(json)
# print the JSON string representation of the object
print(ProductShipping.to_json())

# convert the object into a dict
product_shipping_dict = product_shipping_instance.to_dict()
# create an instance of ProductShipping from a dict
product_shipping_from_dict = ProductShipping.from_dict(product_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


