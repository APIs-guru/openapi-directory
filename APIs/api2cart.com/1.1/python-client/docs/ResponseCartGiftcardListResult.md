# ResponseCartGiftcardListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**gift_card** | [**List[GiftCard]**](GiftCard.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_cart_giftcard_list_result import ResponseCartGiftcardListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCartGiftcardListResult from a JSON string
response_cart_giftcard_list_result_instance = ResponseCartGiftcardListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCartGiftcardListResult.to_json())

# convert the object into a dict
response_cart_giftcard_list_result_dict = response_cart_giftcard_list_result_instance.to_dict()
# create an instance of ResponseCartGiftcardListResult from a dict
response_cart_giftcard_list_result_from_dict = ResponseCartGiftcardListResult.from_dict(response_cart_giftcard_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


