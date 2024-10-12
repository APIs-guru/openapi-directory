# Card


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete** | **bool** | set to false for Pre-Authorize, and true to complete a payment | [optional] [default to True]
**cvd** | **str** | Security code on the back of the credit card. This can be set to mandatory in the back office. digits(3 or 4) | [optional] [default to '123']
**expiry_month** | **str** | eg. 02 for February. digits(2) | [default to '02']
**expiry_year** | **str** | eg. 15 for 2015. digits(2) | [default to '18']
**name** | **str** | Card holder name. alphanumeric(64) | 
**number** | **str** | Credit card number (PAN). digits(20) | [default to '5100000010001004']

## Example

```python
from openapi_client.models.card import Card

# TODO update the JSON string below
json = "{}"
# create an instance of Card from a JSON string
card_instance = Card.from_json(json)
# print the JSON string representation of the object
print(Card.to_json())

# convert the object into a dict
card_dict = card_instance.to_dict()
# create an instance of Card from a dict
card_from_dict = Card.from_dict(card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


