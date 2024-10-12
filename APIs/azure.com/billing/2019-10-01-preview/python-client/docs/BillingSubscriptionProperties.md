# BillingSubscriptionProperties

The usage context properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile_display_name** | **str** | Billing Profile display name to which this product belongs. | [optional] [readonly] 
**billing_profile_id** | **str** | Billing Profile id to which this product belongs. | [optional] [readonly] 
**customer_display_name** | **str** | Display name of customer to which this product belongs. | [optional] [readonly] 
**customer_id** | **str** | Customer id to which this product belongs. | [optional] [readonly] 
**display_name** | **str** | display name. | [optional] [readonly] 
**invoice_section_display_name** | **str** | Invoice section display name to which this product belongs. | [optional] [readonly] 
**invoice_section_id** | **str** | Invoice section id to which this product belongs. | [optional] [readonly] 
**last_month_charges** | [**Amount**](Amount.md) |  | [optional] 
**month_to_date_charges** | [**Amount**](Amount.md) |  | [optional] 
**reseller** | [**Reseller**](Reseller.md) |  | [optional] 
**sku_description** | **str** | The sku description. | [optional] [readonly] 
**sku_id** | **str** | The sku id. | [optional] 
**subscription_billing_status** | **str** | Subscription billing status. | [optional] 
**subscription_id** | **str** | Subscription Id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_subscription_properties import BillingSubscriptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingSubscriptionProperties from a JSON string
billing_subscription_properties_instance = BillingSubscriptionProperties.from_json(json)
# print the JSON string representation of the object
print(BillingSubscriptionProperties.to_json())

# convert the object into a dict
billing_subscription_properties_dict = billing_subscription_properties_instance.to_dict()
# create an instance of BillingSubscriptionProperties from a dict
billing_subscription_properties_from_dict = BillingSubscriptionProperties.from_dict(billing_subscription_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


