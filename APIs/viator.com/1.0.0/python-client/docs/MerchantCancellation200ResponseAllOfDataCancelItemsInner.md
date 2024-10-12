# MerchantCancellation200ResponseAllOfDataCancelItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_response_description** | **str** | See Response codes table | [optional] 
**cancellation_response_status_code** | **str** | See [cancellation response codes table](#cancellation-response-status-codes-and-their-meanings) | [optional] 
**distributor_item_ref** | **str** | **alphanumeric reference code** of the distributor item | [optional] 
**item_id** | **str** | **numeric identifier** of the item to cancel | [optional] 

## Example

```python
from openapi_client.models.merchant_cancellation200_response_all_of_data_cancel_items_inner import MerchantCancellation200ResponseAllOfDataCancelItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantCancellation200ResponseAllOfDataCancelItemsInner from a JSON string
merchant_cancellation200_response_all_of_data_cancel_items_inner_instance = MerchantCancellation200ResponseAllOfDataCancelItemsInner.from_json(json)
# print the JSON string representation of the object
print(MerchantCancellation200ResponseAllOfDataCancelItemsInner.to_json())

# convert the object into a dict
merchant_cancellation200_response_all_of_data_cancel_items_inner_dict = merchant_cancellation200_response_all_of_data_cancel_items_inner_instance.to_dict()
# create an instance of MerchantCancellation200ResponseAllOfDataCancelItemsInner from a dict
merchant_cancellation200_response_all_of_data_cancel_items_inner_from_dict = MerchantCancellation200ResponseAllOfDataCancelItemsInner.from_dict(merchant_cancellation200_response_all_of_data_cancel_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


