# BusinessCurrentAccountCAPricingInner

Card Price

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_pricing_item** | [**BusinessCurrentAccountCAPricingInnerCAPricingItem**](BusinessCurrentAccountCAPricingInnerCAPricingItem.md) |  | 
**product_state** | **str** | Describes if the offering is promotional or a description of a future state. | 

## Example

```python
from openapi_client.models.business_current_account_ca_pricing_inner import BusinessCurrentAccountCAPricingInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountCAPricingInner from a JSON string
business_current_account_ca_pricing_inner_instance = BusinessCurrentAccountCAPricingInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountCAPricingInner.to_json())

# convert the object into a dict
business_current_account_ca_pricing_inner_dict = business_current_account_ca_pricing_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountCAPricingInner from a dict
business_current_account_ca_pricing_inner_from_dict = BusinessCurrentAccountCAPricingInner.from_dict(business_current_account_ca_pricing_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


