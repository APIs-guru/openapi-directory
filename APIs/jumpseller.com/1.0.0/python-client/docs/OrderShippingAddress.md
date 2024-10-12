# OrderShippingAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the Order&#39;s Shipping Address | [optional] 
**city** | **str** | City of the Order&#39;s Shipping Address | [optional] 
**country** | **str** | Country code of the Order&#39;s Shipping Address (ISO 3166-1 alpha-2) | [optional] 
**country_name** | **str** | Country name of the Order&#39;s Shipping Address | [optional] 
**latitude** | **float** | Latitude of the Order&#39;s Shipping Address | [optional] 
**longitude** | **float** | Longitude of the Order&#39;s Shipping Address | [optional] 
**municipality** | **str** | Municipality of the Order&#39;s Shipping Address | [optional] 
**name** | **str** | Name of the Order&#39;s Shipping Address | [optional] 
**postal** | **str** | Postal code of the Order&#39;s Shipping Address | [optional] 
**region** | **str** | Region code of the Order&#39;s Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/) | [optional] 
**street_number** | **float** | Street number of the Order&#39;s Shipping Address | [optional] 
**surname** | **str** | Surname of the Order&#39;s Shipping Address | [optional] 

## Example

```python
from openapi_client.models.order_shipping_address import OrderShippingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShippingAddress from a JSON string
order_shipping_address_instance = OrderShippingAddress.from_json(json)
# print the JSON string representation of the object
print(OrderShippingAddress.to_json())

# convert the object into a dict
order_shipping_address_dict = order_shipping_address_instance.to_dict()
# create an instance of OrderShippingAddress from a dict
order_shipping_address_from_dict = OrderShippingAddress.from_dict(order_shipping_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


