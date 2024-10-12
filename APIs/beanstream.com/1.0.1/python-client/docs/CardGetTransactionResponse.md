# CardGetTransactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_match** | **int** | digits (1) | [optional] 
**avs_result** | **str** | characters (1) | [optional] 
**card_type** | **str** | characters (2) | [optional] 
**cvd_match** | **int** | digits (2) | [optional] 
**expiry_month** | **str** | characters (2) | [optional] 
**expiry_year** | **str** | characters (2) | [optional] 
**last_four** | **str** | digits (4) | [optional] 

## Example

```python
from openapi_client.models.card_get_transaction_response import CardGetTransactionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CardGetTransactionResponse from a JSON string
card_get_transaction_response_instance = CardGetTransactionResponse.from_json(json)
# print the JSON string representation of the object
print(CardGetTransactionResponse.to_json())

# convert the object into a dict
card_get_transaction_response_dict = card_get_transaction_response_instance.to_dict()
# create an instance of CardGetTransactionResponse from a dict
card_get_transaction_response_from_dict = CardGetTransactionResponse.from_dict(card_get_transaction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


