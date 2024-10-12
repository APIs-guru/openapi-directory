# DealServingMetadataDealPauseStatus

Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_pause_reason** | **str** |  | [optional] 
**first_paused_by** | **str** | If the deal is paused, records which party paused the deal first. | [optional] 
**has_buyer_paused** | **bool** |  | [optional] 
**has_seller_paused** | **bool** |  | [optional] 
**seller_pause_reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deal_serving_metadata_deal_pause_status import DealServingMetadataDealPauseStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DealServingMetadataDealPauseStatus from a JSON string
deal_serving_metadata_deal_pause_status_instance = DealServingMetadataDealPauseStatus.from_json(json)
# print the JSON string representation of the object
print(DealServingMetadataDealPauseStatus.to_json())

# convert the object into a dict
deal_serving_metadata_deal_pause_status_dict = deal_serving_metadata_deal_pause_status_instance.to_dict()
# create an instance of DealServingMetadataDealPauseStatus from a dict
deal_serving_metadata_deal_pause_status_from_dict = DealServingMetadataDealPauseStatus.from_dict(deal_serving_metadata_deal_pause_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


