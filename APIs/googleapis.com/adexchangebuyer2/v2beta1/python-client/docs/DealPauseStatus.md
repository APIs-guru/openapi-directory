# DealPauseStatus

Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_pause_reason** | **str** | The buyer&#39;s reason for pausing, if the buyer paused the deal. | [optional] 
**first_paused_by** | **str** | The role of the person who first paused this deal. | [optional] 
**has_buyer_paused** | **bool** | True, if the buyer has paused the deal unilaterally. | [optional] 
**has_seller_paused** | **bool** | True, if the seller has paused the deal unilaterally. | [optional] 
**seller_pause_reason** | **str** | The seller&#39;s reason for pausing, if the seller paused the deal. | [optional] 

## Example

```python
from openapi_client.models.deal_pause_status import DealPauseStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DealPauseStatus from a JSON string
deal_pause_status_instance = DealPauseStatus.from_json(json)
# print the JSON string representation of the object
print(DealPauseStatus.to_json())

# convert the object into a dict
deal_pause_status_dict = deal_pause_status_instance.to_dict()
# create an instance of DealPauseStatus from a dict
deal_pause_status_from_dict = DealPauseStatus.from_dict(deal_pause_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


