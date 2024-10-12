# UsageDetailProperties

The properties of the usage detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Account name. | [optional] [readonly] 
**additional_properties** | **str** | Additional details of this usage item. By default this is not populated, unless it&#39;s specified in $expand. | [optional] [readonly] 
**billable_quantity** | **float** | The billable usage quantity. | [optional] [readonly] 
**billing_period_id** | **str** | The id of the billing period resource that the usage belongs to. | [optional] [readonly] 
**charges_billed_separately** | **bool** | Charges billed separately | [optional] [readonly] 
**consumed_service** | **str** | Consumed service name. | [optional] [readonly] 
**cost_center** | **str** | The cost center of this department if it is a department and a costcenter exists | [optional] [readonly] 
**currency** | **str** | The ISO currency in which the meter is charged, for example, USD. | [optional] [readonly] 
**department_name** | **str** | Department name. | [optional] [readonly] 
**instance_id** | **str** | The uri of the resource instance that the usage is about. | [optional] [readonly] 
**instance_location** | **str** | The location of the resource instance that the usage is about. | [optional] [readonly] 
**instance_name** | **str** | The name of the resource instance that the usage is about. | [optional] [readonly] 
**invoice_id** | **str** | The id of the invoice resource that the usage belongs to. | [optional] [readonly] 
**is_estimated** | **bool** | The estimated usage is subject to change. | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] [readonly] 
**meter_details** | [**MeterDetails**](MeterDetails.md) |  | [optional] 
**meter_id** | **str** | The meter id (GUID). | [optional] [readonly] 
**offer_id** | **str** | Offer Id | [optional] [readonly] 
**part_number** | **str** | Part Number | [optional] [readonly] 
**pretax_cost** | **float** | The amount of cost before tax. | [optional] [readonly] 
**product** | **str** | Product name. | [optional] [readonly] 
**resource_guid** | **str** | Resource Guid | [optional] [readonly] 
**subscription_guid** | **str** | Subscription guid. | [optional] [readonly] 
**subscription_name** | **str** | Subscription name. | [optional] [readonly] 
**usage_end** | **datetime** | The end of the date time range covered by the usage detail. | [optional] [readonly] 
**usage_quantity** | **float** | The quantity of usage. | [optional] [readonly] 
**usage_start** | **datetime** | The start of the date time range covered by the usage detail. | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_detail_properties import UsageDetailProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UsageDetailProperties from a JSON string
usage_detail_properties_instance = UsageDetailProperties.from_json(json)
# print the JSON string representation of the object
print(UsageDetailProperties.to_json())

# convert the object into a dict
usage_detail_properties_dict = usage_detail_properties_instance.to_dict()
# create an instance of UsageDetailProperties from a dict
usage_detail_properties_from_dict = UsageDetailProperties.from_dict(usage_detail_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


