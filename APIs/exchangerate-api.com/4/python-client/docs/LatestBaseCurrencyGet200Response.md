# LatestBaseCurrencyGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base** | **str** | The currency code you supplied as base in your request | [optional] 
**var_date** | **str** | The date these exchange rates are for | [optional] 
**rates** | **Dict[str, float]** | Each supported currency code in terms of the base currency | [optional] 
**time_last_updated** | **int** | The epoch time this set of exchange rates was generated | [optional] 

## Example

```python
from openapi_client.models.latest_base_currency_get200_response import LatestBaseCurrencyGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LatestBaseCurrencyGet200Response from a JSON string
latest_base_currency_get200_response_instance = LatestBaseCurrencyGet200Response.from_json(json)
# print the JSON string representation of the object
print(LatestBaseCurrencyGet200Response.to_json())

# convert the object into a dict
latest_base_currency_get200_response_dict = latest_base_currency_get200_response_instance.to_dict()
# create an instance of LatestBaseCurrencyGet200Response from a dict
latest_base_currency_get200_response_from_dict = LatestBaseCurrencyGet200Response.from_dict(latest_base_currency_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


