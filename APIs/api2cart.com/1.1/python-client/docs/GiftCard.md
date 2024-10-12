# GiftCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**amount** | **float** |  | [optional] 
**avail_to** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**free_product_ids** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**initial_amount** | **float** |  | [optional] 
**issuer_email** | **str** |  | [optional] 
**issuer_name** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**recipient_email** | **str** |  | [optional] 
**recipient_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**usage_history** | [**List[CouponHistory]**](CouponHistory.md) |  | [optional] 

## Example

```python
from openapi_client.models.gift_card import GiftCard

# TODO update the JSON string below
json = "{}"
# create an instance of GiftCard from a JSON string
gift_card_instance = GiftCard.from_json(json)
# print the JSON string representation of the object
print(GiftCard.to_json())

# convert the object into a dict
gift_card_dict = gift_card_instance.to_dict()
# create an instance of GiftCard from a dict
gift_card_from_dict = GiftCard.from_dict(gift_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


