# MerchantRejectionReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the reason. | [optional] 
**reason_code** | **str** | Code of the rejection reason. | [optional] 

## Example

```python
from openapi_client.models.merchant_rejection_reason import MerchantRejectionReason

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantRejectionReason from a JSON string
merchant_rejection_reason_instance = MerchantRejectionReason.from_json(json)
# print the JSON string representation of the object
print(MerchantRejectionReason.to_json())

# convert the object into a dict
merchant_rejection_reason_dict = merchant_rejection_reason_instance.to_dict()
# create an instance of MerchantRejectionReason from a dict
merchant_rejection_reason_from_dict = MerchantRejectionReason.from_dict(merchant_rejection_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


