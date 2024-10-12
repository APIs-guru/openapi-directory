# MerchantCancellationRequestCancelItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_code** | **str** | **cancellation code** that describes the reason for the cancellation - see: [Suggested cancellation codes](#suggested-cancellation-codes)  | [optional] 
**cancel_description** | **str** | **natural-language description** of the reason for cancellation (a reason must be provided if &#x60;cancelCode&#x60; is &#x60;62&#x60; or &#x60;66&#x60;) | [optional] 
**distributor_item_ref** | **str** | **alphanumeric reference code** of the distributor item | [optional] 
**item_id** | **int** | **numeric identifier** of item to cancel in itinerary | [optional] 

## Example

```python
from openapi_client.models.merchant_cancellation_request_cancel_items_inner import MerchantCancellationRequestCancelItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantCancellationRequestCancelItemsInner from a JSON string
merchant_cancellation_request_cancel_items_inner_instance = MerchantCancellationRequestCancelItemsInner.from_json(json)
# print the JSON string representation of the object
print(MerchantCancellationRequestCancelItemsInner.to_json())

# convert the object into a dict
merchant_cancellation_request_cancel_items_inner_dict = merchant_cancellation_request_cancel_items_inner_instance.to_dict()
# create an instance of MerchantCancellationRequestCancelItemsInner from a dict
merchant_cancellation_request_cancel_items_inner_from_dict = MerchantCancellationRequestCancelItemsInner.from_dict(merchant_cancellation_request_cancel_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


