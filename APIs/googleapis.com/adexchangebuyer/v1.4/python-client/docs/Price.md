# Price


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_micros** | **float** | The price value in micros. | [optional] 
**currency_code** | **str** | The currency code for the price. | [optional] 
**expected_cpm_micros** | **float** | In case of CPD deals, the expected CPM in micros. | [optional] 
**pricing_type** | **str** | The pricing type for the deal/product. | [optional] 

## Example

```python
from openapi_client.models.price import Price

# TODO update the JSON string below
json = "{}"
# create an instance of Price from a JSON string
price_instance = Price.from_json(json)
# print the JSON string representation of the object
print(Price.to_json())

# convert the object into a dict
price_dict = price_instance.to_dict()
# create an instance of Price from a dict
price_from_dict = Price.from_dict(price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


