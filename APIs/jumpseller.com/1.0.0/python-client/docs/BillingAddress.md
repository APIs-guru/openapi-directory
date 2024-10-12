# BillingAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the Customer&#39;s Billing Address | [optional] 
**city** | **str** | City of the Customer&#39;s Billing Address | [optional] 
**country** | **str** | Country code of the Customer&#39;s Billing Address (ISO 3166-1 alpha-2) | [optional] 
**municipality** | **str** | Municipality of the Customer&#39;s Billing Address | [optional] 
**name** | **str** | Name of the Customer&#39;s Billing Address | [optional] 
**postal** | **str** | Postal code of the Customer&#39;s Billing Address | [optional] 
**region** | **str** | Region code of the Customer&#39;s Billing Address (Use the FIPS standard - http://www.geonames.org/countries/) | [optional] 
**surname** | **str** | Surname of the Customer&#39;s Billing Address | [optional] 
**taxid** | **str** | Tax id of the Customer&#39;s Billing Address | [optional] 

## Example

```python
from openapi_client.models.billing_address import BillingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAddress from a JSON string
billing_address_instance = BillingAddress.from_json(json)
# print the JSON string representation of the object
print(BillingAddress.to_json())

# convert the object into a dict
billing_address_dict = billing_address_instance.to_dict()
# create an instance of BillingAddress from a dict
billing_address_from_dict = BillingAddress.from_dict(billing_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


