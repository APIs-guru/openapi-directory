# AddMerchantRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_id** | **str** | The ID of the acquirer. | 
**merchant** | [**AddMerchantMerchant**](AddMerchantMerchant.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_merchant_request import AddMerchantRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddMerchantRequest from a JSON string
add_merchant_request_instance = AddMerchantRequest.from_json(json)
# print the JSON string representation of the object
print(AddMerchantRequest.to_json())

# convert the object into a dict
add_merchant_request_dict = add_merchant_request_instance.to_dict()
# create an instance of AddMerchantRequest from a dict
add_merchant_request_from_dict = AddMerchantRequest.from_dict(add_merchant_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


