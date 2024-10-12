# MerchantCancellation200ResponseAllOfData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_items** | [**List[MerchantCancellation200ResponseAllOfDataCancelItemsInner]**](MerchantCancellation200ResponseAllOfDataCancelItemsInner.md) | **array** of items to be cancelled | [optional] 
**distributor_ref** | **str** | **reference code** for the distributor | [optional] 
**itinerary_id** | **int** | **numeric** identifier for the itinerary | [optional] 

## Example

```python
from openapi_client.models.merchant_cancellation200_response_all_of_data import MerchantCancellation200ResponseAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantCancellation200ResponseAllOfData from a JSON string
merchant_cancellation200_response_all_of_data_instance = MerchantCancellation200ResponseAllOfData.from_json(json)
# print the JSON string representation of the object
print(MerchantCancellation200ResponseAllOfData.to_json())

# convert the object into a dict
merchant_cancellation200_response_all_of_data_dict = merchant_cancellation200_response_all_of_data_instance.to_dict()
# create an instance of MerchantCancellation200ResponseAllOfData from a dict
merchant_cancellation200_response_all_of_data_from_dict = MerchantCancellation200ResponseAllOfData.from_dict(merchant_cancellation200_response_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


