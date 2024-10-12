# CardPurchaseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_match** | **int** | digits (1) | [optional] 
**card_type** | **str** | characters (2) | [optional] 
**cvd_match** | **int** | digits (2) | [optional] 
**last_four** | **str** | digits (4) | [optional] 
**postal_result** | **int** | digits (1) | [optional] 

## Example

```python
from openapi_client.models.card_purchase_response import CardPurchaseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CardPurchaseResponse from a JSON string
card_purchase_response_instance = CardPurchaseResponse.from_json(json)
# print the JSON string representation of the object
print(CardPurchaseResponse.to_json())

# convert the object into a dict
card_purchase_response_dict = card_purchase_response_instance.to_dict()
# create an instance of CardPurchaseResponse from a dict
card_purchase_response_from_dict = CardPurchaseResponse.from_dict(card_purchase_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


