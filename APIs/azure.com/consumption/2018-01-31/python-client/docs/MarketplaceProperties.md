# MarketplaceProperties

The properties of the marketplace usage detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Account name. | [optional] [readonly] 
**additional_properties** | **str** | Additional details of this usage item. By default this is not populated, unless it&#39;s specified in $expand. | [optional] [readonly] 
**billing_period_id** | **str** | The id of the billing period resource that the usage belongs to. | [optional] [readonly] 
**consumed_quantity** | **float** | The quantity of usage. | [optional] [readonly] 
**consumed_service** | **str** | Consumed service name. | [optional] [readonly] 
**cost_center** | **str** | The cost center of this department if it is a department and a costcenter exists | [optional] [readonly] 
**currency** | **str** | The ISO currency in which the meter is charged, for example, USD. | [optional] [readonly] 
**department_name** | **str** | Department name. | [optional] [readonly] 
**instance_id** | **str** | The uri of the resource instance that the usage is about. | [optional] [readonly] 
**instance_name** | **str** | The name of the resource instance that the usage is about. | [optional] [readonly] 
**is_estimated** | **bool** | The estimated usage is subject to change. | [optional] [readonly] 
**meter_id** | **str** | The meter id. | [optional] [readonly] 
**offer_name** | **str** | The type of offer. | [optional] [readonly] 
**order_number** | **str** | The order number. | [optional] [readonly] 
**plan_name** | **str** | The name of plan. | [optional] [readonly] 
**pretax_cost** | **float** | The amount of cost before tax. | [optional] [readonly] 
**publisher_name** | **str** | The name of publisher. | [optional] [readonly] 
**resource_group** | **str** | The name of resource group. | [optional] [readonly] 
**resource_rate** | **float** | The marketplace resource rate. | [optional] [readonly] 
**subscription_guid** | **str** | Subscription guid. | [optional] [readonly] 
**subscription_name** | **str** | Subscription name. | [optional] [readonly] 
**unit_of_measure** | **str** | The unit of measure. | [optional] [readonly] 
**usage_end** | **datetime** | The end of the date time range covered by the usage detail. | [optional] [readonly] 
**usage_start** | **datetime** | The start of the date time range covered by the usage detail. | [optional] [readonly] 

## Example

```python
from openapi_client.models.marketplace_properties import MarketplaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceProperties from a JSON string
marketplace_properties_instance = MarketplaceProperties.from_json(json)
# print the JSON string representation of the object
print(MarketplaceProperties.to_json())

# convert the object into a dict
marketplace_properties_dict = marketplace_properties_instance.to_dict()
# create an instance of MarketplaceProperties from a dict
marketplace_properties_from_dict = MarketplaceProperties.from_dict(marketplace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


