# Price

Price of the message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**Currency**](Currency.md) |  | [optional] 
**per_unit** | **str** |  | [optional] [readonly] 
**total_amount** | **str** |  | [optional] [readonly] 

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


