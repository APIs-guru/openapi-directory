# LabeledPrice

This object represents a portion of the price for goods or services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Price of the product in the *smallest units* of the [currency](/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of &#x60;US$ 1.45&#x60; pass &#x60;amount &#x3D; 145&#x60;. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). | 
**label** | **str** | Portion label | 

## Example

```python
from openapi_client.models.labeled_price import LabeledPrice

# TODO update the JSON string below
json = "{}"
# create an instance of LabeledPrice from a JSON string
labeled_price_instance = LabeledPrice.from_json(json)
# print the JSON string representation of the object
print(LabeledPrice.to_json())

# convert the object into a dict
labeled_price_dict = labeled_price_instance.to_dict()
# create an instance of LabeledPrice from a dict
labeled_price_from_dict = LabeledPrice.from_dict(labeled_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


