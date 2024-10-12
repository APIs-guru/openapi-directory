# ModernUsageDetailProperties

The properties of the usage detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | **str** | Additional details of this usage item. Use this field to get usage line item specific details such as the actual VM Size (ServiceType) or the ratio in which the reservation discount is applied. | [optional] [readonly] 
**billing_account_id** | **str** | Billing Account identifier. | [optional] [readonly] 
**billing_account_name** | **str** | Name of the Billing Account. | [optional] [readonly] 
**billing_currency_code** | **str** | The currency defining the billed cost. | [optional] [readonly] 
**billing_period_end_date** | **datetime** | Billing Period End Date as in the invoice. | [optional] [readonly] 
**billing_period_start_date** | **datetime** | Billing Period Start Date as in the invoice. | [optional] [readonly] 
**billing_profile_id** | **str** | Identifier for the billing profile that groups costs across invoices in the a singular billing currency across across the customers who have onboarded the Microsoft customer agreement and the customers in CSP who have made entitlement purchases like SaaS, Marketplace, RI, etc. | [optional] [readonly] 
**billing_profile_name** | **str** | Name of the billing profile that groups costs across invoices in the a singular billing currency across across the customers who have onboarded the Microsoft customer agreement and the customers in CSP who have made entitlement purchases like SaaS, Marketplace, RI, etc. | [optional] [readonly] 
**charge_type** | **str** | Indicates a charge represents credits, usage, a Marketplace purchase, a reservation fee, or a refund. | [optional] [readonly] 
**consumed_service** | **str** | Consumed service name. Name of the azure resource provider that emits the usage or was purchased. This value is not provided for marketplace usage. | [optional] [readonly] 
**cost_center** | **str** | The cost center of this department if it is a department and a cost center is provided. | [optional] [readonly] 
**cost_in_billing_currency** | **float** | ExtendedCost or blended cost before tax in billed currency. | [optional] [readonly] 
**cost_in_pricing_currency** | **float** | ExtendedCost or blended cost before tax in pricing currency to correlate with prices. | [optional] [readonly] 
**cost_in_usd** | **float** | Estimated extendedCost or blended cost before tax in USD. | [optional] [readonly] 
**customer_name** | **str** | Name of the customer&#39;s AAD tenant. | [optional] [readonly] 
**customer_tenant_id** | **str** | Identifier of the customer&#39;s AAD tenant. | [optional] [readonly] 
**var_date** | **datetime** | Date for the usage record. | [optional] [readonly] 
**exchange_rate** | **str** | Exchange rate used in conversion from pricing currency to billing currency. | [optional] [readonly] 
**exchange_rate_date** | **datetime** | Date on which exchange rate used in conversion from pricing currency to billing currency. | [optional] [readonly] 
**exchange_rate_pricing_to_billing** | **float** | Exchange Rate from pricing currency to billing currency. | [optional] [readonly] 
**frequency** | **str** | Indicates how frequently this charge will occur. OneTime for purchases which only happen once, Monthly for fees which recur every month, and UsageBased for charges based on how much a service is used. | [optional] [readonly] 
**instance_name** | **str** | Instance Name. | [optional] [readonly] 
**invoice_id** | **str** | Invoice ID as on the invoice where the specific transaction appears. | [optional] [readonly] 
**invoice_section_id** | **str** | Identifier of the project that is being charged in the invoice. Not applicable for Microsoft Customer Agreements onboarded by partners. | [optional] [readonly] 
**invoice_section_name** | **str** | Name of the project that is being charged in the invoice. Not applicable for Microsoft Customer Agreements onboarded by partners. | [optional] [readonly] 
**is_azure_credit_eligible** | **bool** | Determines if the cost is eligible to be paid for using Azure credits. | [optional] [readonly] 
**market_price** | **float** | Market Price that&#39;s charged for the usage. | [optional] [readonly] 
**meter_category** | **str** | Identifies the top-level service for the usage. | [optional] [readonly] 
**meter_id** | **str** | The meter id (GUID). Not available for marketplace. For reserved instance this represents the primary meter for which the reservation was purchased. For the actual VM Size for which the reservation is purchased see productOrderName. | [optional] [readonly] 
**meter_name** | **str** | Identifies the name of the meter against which consumption is measured. | [optional] [readonly] 
**meter_region** | **str** | Identifies the location of the datacenter for certain services that are priced based on datacenter location. | [optional] [readonly] 
**meter_sub_category** | **str** | Defines the type or sub-category of Azure service that can affect the rate. | [optional] [readonly] 
**partner_earned_credit_applied** | **str** | Flag to indicate if partner earned credit has been applied or not. | [optional] [readonly] 
**partner_earned_credit_rate** | **float** | Rate of discount applied if there is a partner earned credit (PEC) based on partner admin link access. | [optional] [readonly] 
**partner_name** | **str** | Name of the partner&#39; AAD tenant. | [optional] [readonly] 
**partner_tenant_id** | **str** | Identifier for the partner&#39;s AAD tenant. | [optional] [readonly] 
**payg_cost_in_billing_currency** | **float** | The amount of PayG cost before tax in billing currency. | [optional] [readonly] 
**payg_cost_in_usd** | **float** | The amount of PayG cost before tax in US Dollar currency. | [optional] [readonly] 
**previous_invoice_id** | **str** | Reference to an original invoice there is a refund (negative cost). This is populated only when there is a refund. | [optional] [readonly] 
**pricing_currency_code** | **str** | Pricing Billing Currency. | [optional] [readonly] 
**product** | **str** | Name of the product that has accrued charges by consumption or purchase as listed in the invoice. Not available for Marketplace. | [optional] [readonly] 
**product_identifier** | **str** | Identifer for the product that has accrued charges by consumption or purchase . This is the concatenated key of productId and SKuId in partner center. | [optional] [readonly] 
**product_order_id** | **str** | The identifier for the asset or Azure plan name that the subscription belongs to. For example: Azure Plan. For reservations this is the Reservation Order ID. | [optional] [readonly] 
**product_order_name** | **str** | Product Order Name. For reservations this is the SKU that was purchased. | [optional] [readonly] 
**publisher_id** | **str** | Publisher Id. | [optional] [readonly] 
**publisher_name** | **str** | Name of the publisher of the service including Microsoft or Third Party publishers. | [optional] [readonly] 
**publisher_type** | **str** | Type of publisher that identifies if the publisher is first party, third party reseller or third party agency. | [optional] [readonly] 
**quantity** | **float** | Measure the quantity purchased or consumed.The amount of the meter used during the billing period. | [optional] [readonly] 
**reseller_mpn_id** | **str** | MPNId for the reseller associated with the subscription. | [optional] [readonly] 
**reseller_name** | **str** | Reseller Name. | [optional] [readonly] 
**reservation_id** | **str** | ARM resource id of the reservation. Only applies to records relevant to reservations. | [optional] [readonly] 
**reservation_name** | **str** | User provided display name of the reservation. Last known name for a particular day is populated in the daily data. Only applies to records relevant to reservations. | [optional] [readonly] 
**resource_group** | **str** | Name of the Azure resource group used for cohesive lifecycle management of resources. | [optional] [readonly] 
**resource_location** | **str** | Name of the resource location. | [optional] [readonly] 
**resource_location_normalized** | **str** | Resource Location Normalized. | [optional] [readonly] 
**service_family** | **str** | List the service family for the product purchased or charged (Example: Storage ; Compute). | [optional] [readonly] 
**service_info1** | **str** | Service Info 1. | [optional] [readonly] 
**service_info2** | **str** | Service Info 2. | [optional] [readonly] 
**service_period_end_date** | **datetime** | End date for the period when the service usage was rated for charges. The prices for Azure services are determined based on the rating period. | [optional] [readonly] 
**service_period_start_date** | **datetime** | Start date for the rating period when the service usage was rated for charges. The prices for Azure services are determined for the rating period. | [optional] [readonly] 
**subscription_guid** | **str** | Unique Microsoft generated identifier for the Azure Subscription. | [optional] [readonly] 
**subscription_name** | **str** | Name of the Azure Subscription. | [optional] [readonly] 
**term** | **str** | Term (in months). Displays the term for the validity of the offer. For example. In case of reserved instances it displays 12 months for yearly term of reserved instance. For one time purchases or recurring purchases, the terms displays 1 month; This is not applicable for Azure consumption. | [optional] [readonly] 
**unit_of_measure** | **str** | Identifies the Unit that the service is charged in. For example, GB, hours, 10,000 s. | [optional] [readonly] 
**unit_price** | **float** | Unit Price is the price applicable to you. (your EA or other contract price). | [optional] [readonly] 

## Example

```python
from openapi_client.models.modern_usage_detail_properties import ModernUsageDetailProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ModernUsageDetailProperties from a JSON string
modern_usage_detail_properties_instance = ModernUsageDetailProperties.from_json(json)
# print the JSON string representation of the object
print(ModernUsageDetailProperties.to_json())

# convert the object into a dict
modern_usage_detail_properties_dict = modern_usage_detail_properties_instance.to_dict()
# create an instance of ModernUsageDetailProperties from a dict
modern_usage_detail_properties_from_dict = ModernUsageDetailProperties.from_dict(modern_usage_detail_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


