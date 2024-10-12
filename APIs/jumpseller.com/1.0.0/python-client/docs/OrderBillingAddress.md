# OrderBillingAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the Order&#39;s Billing Address | [optional] 
**city** | **str** | City of the Order&#39;s Billing Address | [optional] 
**country** | **str** | Country code of the Order&#39;s Billing Address (ISO 3166-1 alpha-2) | [optional] 
**country_name** | **str** | Country name of the Order&#39;s Billing Address | [optional] 
**municipality** | **str** | Municipality of the Order&#39;s Billing Address | [optional] 
**name** | **str** | Name of the Order&#39;s Billing Address | [optional] 
**postal** | **str** | Postal code of the Order&#39;s Billing Address | [optional] 
**region** | **str** | Region code of the Order&#39;s Billing Address (Use the FIPS standard - http://www.geonames.org/countries/) | [optional] 
**street_number** | **float** | Street number of the Order&#39;s Billing Address | [optional] 
**surname** | **str** | Surname of the Order&#39;s Billing Address | [optional] 

## Example

```python
from openapi_client.models.order_billing_address import OrderBillingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of OrderBillingAddress from a JSON string
order_billing_address_instance = OrderBillingAddress.from_json(json)
# print the JSON string representation of the object
print(OrderBillingAddress.to_json())

# convert the object into a dict
order_billing_address_dict = order_billing_address_instance.to_dict()
# create an instance of OrderBillingAddress from a dict
order_billing_address_from_dict = OrderBillingAddress.from_dict(order_billing_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


