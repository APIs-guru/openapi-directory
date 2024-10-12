# CalculatePriceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CalculatePriceResponseProperties**](CalculatePriceResponseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.calculate_price_response import CalculatePriceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CalculatePriceResponse from a JSON string
calculate_price_response_instance = CalculatePriceResponse.from_json(json)
# print the JSON string representation of the object
print(CalculatePriceResponse.to_json())

# convert the object into a dict
calculate_price_response_dict = calculate_price_response_instance.to_dict()
# create an instance of CalculatePriceResponse from a dict
calculate_price_response_from_dict = CalculatePriceResponse.from_dict(calculate_price_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


