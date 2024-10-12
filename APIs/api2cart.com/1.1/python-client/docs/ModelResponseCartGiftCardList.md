# ModelResponseCartGiftCardList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**result** | [**ResponseCartGiftcardListResult**](ResponseCartGiftcardListResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_response_cart_gift_card_list import ModelResponseCartGiftCardList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelResponseCartGiftCardList from a JSON string
model_response_cart_gift_card_list_instance = ModelResponseCartGiftCardList.from_json(json)
# print the JSON string representation of the object
print(ModelResponseCartGiftCardList.to_json())

# convert the object into a dict
model_response_cart_gift_card_list_dict = model_response_cart_gift_card_list_instance.to_dict()
# create an instance of ModelResponseCartGiftCardList from a dict
model_response_cart_gift_card_list_from_dict = ModelResponseCartGiftCardList.from_dict(model_response_cart_gift_card_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


