# FinalizedDeal

A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal** | [**Deal**](Deal.md) |  | [optional] 
**deal_pausing_info** | [**DealPausingInfo**](DealPausingInfo.md) |  | [optional] 
**deal_serving_status** | **str** | Serving status of the deal. | [optional] 
**name** | **str** | The resource name of the finalized deal. Format: &#x60;buyers/{accountId}/finalizedDeals/{finalizedDealId}&#x60; | [optional] 
**ready_to_serve** | **bool** | Whether the Programmatic Guaranteed deal is ready for serving. | [optional] 
**rtb_metrics** | [**RtbMetrics**](RtbMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.finalized_deal import FinalizedDeal

# TODO update the JSON string below
json = "{}"
# create an instance of FinalizedDeal from a JSON string
finalized_deal_instance = FinalizedDeal.from_json(json)
# print the JSON string representation of the object
print(FinalizedDeal.to_json())

# convert the object into a dict
finalized_deal_dict = finalized_deal_instance.to_dict()
# create an instance of FinalizedDeal from a dict
finalized_deal_from_dict = FinalizedDeal.from_dict(finalized_deal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


