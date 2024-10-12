# MerchantTransfers69

Response details for a merchant transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Data70**](Data70.md) |  | [optional] 
**item_count** | **int** | Number of Transactions in the list | [optional] 
**resource_type** | **str** | Type of resource | [optional] 

## Example

```python
from openapi_client.models.merchant_transfers69 import MerchantTransfers69

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantTransfers69 from a JSON string
merchant_transfers69_instance = MerchantTransfers69.from_json(json)
# print the JSON string representation of the object
print(MerchantTransfers69.to_json())

# convert the object into a dict
merchant_transfers69_dict = merchant_transfers69_instance.to_dict()
# create an instance of MerchantTransfers69 from a dict
merchant_transfers69_from_dict = MerchantTransfers69.from_dict(merchant_transfers69_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


