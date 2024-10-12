# InsertionOrder

A single insertion order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Output only. The unique ID of the advertiser the insertion order belongs to. | [optional] [readonly] 
**bid_strategy** | [**BiddingStrategy**](BiddingStrategy.md) |  | [optional] 
**budget** | [**InsertionOrderBudget**](InsertionOrderBudget.md) |  | [optional] 
**campaign_id** | **str** | Required. Immutable. The unique ID of the campaign that the insertion order belongs to. | [optional] 
**display_name** | **str** | Required. The display name of the insertion order. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**entity_status** | **str** | Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only &#x60;ENTITY_STATUS_DRAFT&#x60; is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to &#x60;ENTITY_STATUS_ACTIVE&#x60; after creation. * An insertion order cannot be changed back to &#x60;ENTITY_STATUS_DRAFT&#x60; status from any other status. * An insertion order cannot be set to &#x60;ENTITY_STATUS_ACTIVE&#x60; if its parent campaign is not active. | [optional] 
**frequency_cap** | [**FrequencyCap**](FrequencyCap.md) |  | [optional] 
**insertion_order_id** | **str** | Output only. The unique ID of the insertion order. Assigned by the system. | [optional] [readonly] 
**insertion_order_type** | **str** | The type of insertion order. If this field is unspecified in creation, the value defaults to &#x60;RTB&#x60;. | [optional] 
**integration_details** | [**IntegrationDetails**](IntegrationDetails.md) |  | [optional] 
**kpi** | [**Kpi**](Kpi.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the insertion order. | [optional] [readonly] 
**pacing** | [**Pacing**](Pacing.md) |  | [optional] 
**partner_costs** | [**List[PartnerCost]**](PartnerCost.md) | The partner costs associated with the insertion order. If absent or empty in CreateInsertionOrder method, the newly created insertion order will inherit partner costs from the partner settings. | [optional] 
**reservation_type** | **str** | Output only. The reservation type of the insertion order. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the insertion order was last updated. Assigned by the system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.insertion_order import InsertionOrder

# TODO update the JSON string below
json = "{}"
# create an instance of InsertionOrder from a JSON string
insertion_order_instance = InsertionOrder.from_json(json)
# print the JSON string representation of the object
print(InsertionOrder.to_json())

# convert the object into a dict
insertion_order_dict = insertion_order_instance.to_dict()
# create an instance of InsertionOrder from a dict
insertion_order_from_dict = InsertionOrder.from_dict(insertion_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


