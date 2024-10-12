# MerchantIds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Identifies the number of merchants found based on a request. | [optional] 
**returned_merchants** | [**List[Merchant]**](Merchant.md) | List of matching returned merchants | [optional] 

## Example

```python
from openapi_client.models.merchant_ids import MerchantIds

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantIds from a JSON string
merchant_ids_instance = MerchantIds.from_json(json)
# print the JSON string representation of the object
print(MerchantIds.to_json())

# convert the object into a dict
merchant_ids_dict = merchant_ids_instance.to_dict()
# create an instance of MerchantIds from a dict
merchant_ids_from_dict = MerchantIds.from_dict(merchant_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


