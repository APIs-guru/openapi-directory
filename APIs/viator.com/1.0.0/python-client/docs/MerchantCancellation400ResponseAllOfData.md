# MerchantCancellation400ResponseAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_response_description** | **str** | **natural-language description** for this response (see response codes table) | [optional] 
**cancellation_response_status_code** | **str** | **status code** for this response (see response codes table) | [optional] 
**distributor_item_ref** | **str** | **alphanumeric reference code** of the distributor item | [optional] 
**item_id** | **str** | **identifier** for the item to cancel | [optional] 

## Example

```python
from openapi_client.models.merchant_cancellation400_response_all_of_data import MerchantCancellation400ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantCancellation400ResponseAllOfData from a JSON string
merchant_cancellation400_response_all_of_data_instance = MerchantCancellation400ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(MerchantCancellation400ResponseAllOfData.to_json())

# convert the object into a dict
merchant_cancellation400_response_all_of_data_dict = merchant_cancellation400_response_all_of_data_instance.to_dict()
# create an instance of MerchantCancellation400ResponseAllOfData from a dict
merchant_cancellation400_response_all_of_data_from_dict = MerchantCancellation400ResponseAllOfData.from_dict(merchant_cancellation400_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


