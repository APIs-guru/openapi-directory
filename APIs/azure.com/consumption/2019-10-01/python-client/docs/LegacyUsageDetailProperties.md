# LegacyUsageDetailProperties

The properties of the legacy usage detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Account Name. | [optional] [readonly] 
**account_owner_id** | **str** | Account Owner Id. | [optional] [readonly] 
**additional_info** | **str** | Additional details of this usage item. By default this is not populated, unless it&#39;s specified in $expand. Use this field to get usage line item specific details such as the actual VM Size (ServiceType) or the ratio in which the reservation discount is applied. | [optional] [readonly] 
**billing_account_id** | **str** | Billing Account identifier. | [optional] [readonly] 
**billing_account_name** | **str** | Billing Account Name. | [optional] [readonly] 
**billing_currency** | **str** | Billing Currency. | [optional] [readonly] 
**billing_period_end_date** | **datetime** | The billing period end date. | [optional] [readonly] 
**billing_period_start_date** | **datetime** | The billing period start date. | [optional] [readonly] 
**billing_profile_id** | **str** | Billing Profile identifier. | [optional] [readonly] 
**billing_profile_name** | **str** | Billing Profile Name. | [optional] [readonly] 
**charge_type** | **str** | Indicates a charge represents credits, usage, a Marketplace purchase, a reservation fee, or a refund. | [optional] [readonly] 
**consumed_service** | **str** | Consumed service name. Name of the azure resource provider that emits the usage or was purchased. This value is not provided for marketplace usage. | [optional] [readonly] 
**cost** | **float** | The amount of cost before tax. | [optional] [readonly] 
**cost_center** | **str** | The cost center of this department if it is a department and a cost center is provided. | [optional] [readonly] 
**var_date** | **datetime** | Date for the usage record. | [optional] [readonly] 
**effective_price** | **float** | Effective Price that&#39;s charged for the usage. | [optional] [readonly] 
**frequency** | **str** | Indicates how frequently this charge will occur. OneTime for purchases which only happen once, Monthly for fees which recur every month, and UsageBased for charges based on how much a service is used. | [optional] [readonly] 
**invoice_section** | **str** | Invoice Section Name. | [optional] [readonly] 
**is_azure_credit_eligible** | **bool** | Is Azure Credit Eligible. | [optional] [readonly] 
**meter_details** | [**MeterDetailsResponse**](MeterDetailsResponse.md) |  | [optional] 
**meter_id** | **str** | The meter id (GUID). Not available for marketplace. For reserved instance this represents the primary meter for which the reservation was purchased. For the actual VM Size for which the reservation is purchased see productOrderName. | [optional] [readonly] 
**offer_id** | **str** | Offer Id. Ex: MS-AZR-0017P, MS-AZR-0148P. | [optional] [readonly] 
**part_number** | **str** | Part Number of the service used. Can be used to join with the price sheet. Not available for marketplace. | [optional] [readonly] 
**plan_name** | **str** | Plan Name. | [optional] [readonly] 
**product** | **str** | Product name for the consumed service or purchase. Not available for Marketplace. | [optional] [readonly] 
**product_order_id** | **str** | Product Order Id. For reservations this is the Reservation Order ID. | [optional] [readonly] 
**product_order_name** | **str** | Product Order Name. For reservations this is the SKU that was purchased. | [optional] [readonly] 
**publisher_name** | **str** | Publisher Name. | [optional] [readonly] 
**publisher_type** | **str** | Publisher Type. | [optional] [readonly] 
**quantity** | **float** | The usage quantity. | [optional] [readonly] 
**reservation_id** | **str** | ARM resource id of the reservation. Only applies to records relevant to reservations. | [optional] [readonly] 
**reservation_name** | **str** | User provided display name of the reservation. Last known name for a particular day is populated in the daily data. Only applies to records relevant to reservations. | [optional] [readonly] 
**resource_group** | **str** | Resource Group Name. | [optional] [readonly] 
**resource_id** | **str** | Azure resource manager resource identifier. | [optional] [readonly] 
**resource_location** | **str** | Resource Location. | [optional] [readonly] 
**resource_name** | **str** | Resource Name. | [optional] [readonly] 
**service_info1** | **str** | Service Info 1. | [optional] [readonly] 
**service_info2** | **str** | Service Info 2. | [optional] [readonly] 
**subscription_id** | **str** | Subscription guid. | [optional] [readonly] 
**subscription_name** | **str** | Subscription name. | [optional] [readonly] 
**term** | **str** | Term (in months). 1 month for monthly recurring purchase. 12 months for a 1 year reservation. 36 months for a 3 year reservation. | [optional] [readonly] 
**unit_price** | **float** | Unit Price is the price applicable to you. (your EA or other contract price). | [optional] [readonly] 

## Example

```python
from openapi_client.models.legacy_usage_detail_properties import LegacyUsageDetailProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyUsageDetailProperties from a JSON string
legacy_usage_detail_properties_instance = LegacyUsageDetailProperties.from_json(json)
# print the JSON string representation of the object
print(LegacyUsageDetailProperties.to_json())

# convert the object into a dict
legacy_usage_detail_properties_dict = legacy_usage_detail_properties_instance.to_dict()
# create an instance of LegacyUsageDetailProperties from a dict
legacy_usage_detail_properties_from_dict = LegacyUsageDetailProperties.from_dict(legacy_usage_detail_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


