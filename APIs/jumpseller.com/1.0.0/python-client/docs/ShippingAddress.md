# ShippingAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the Customer&#39;s Shipping Address | [optional] 
**city** | **str** | City of the Customer&#39;s Shipping Address | [optional] 
**country** | **str** | Country code of the Customer&#39;s Shipping Address (ISO 3166-1 alpha-2) | [optional] 
**municipality** | **str** | Municipality of the Customer&#39;s Shipping Address | [optional] 
**name** | **str** | Name of the Customer&#39;s Shipping Address | [optional] 
**postal** | **str** | Postal code of the Customer&#39;s Shipping Address | [optional] 
**region** | **str** | Region code of the Customer&#39;s Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/) | [optional] 
**surname** | **str** | Surname of the Customer&#39;s Shipping Address | [optional] 

## Example

```python
from openapi_client.models.shipping_address import ShippingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingAddress from a JSON string
shipping_address_instance = ShippingAddress.from_json(json)
# print the JSON string representation of the object
print(ShippingAddress.to_json())

# convert the object into a dict
shipping_address_dict = shipping_address_instance.to_dict()
# create an instance of ShippingAddress from a dict
shipping_address_from_dict = ShippingAddress.from_dict(shipping_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


