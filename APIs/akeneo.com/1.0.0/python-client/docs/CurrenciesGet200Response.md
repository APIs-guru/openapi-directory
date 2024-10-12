# CurrenciesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Currency code | 
**enabled** | **bool** | Whether the currency is enabled | [optional] 

## Example

```python
from openapi_client.models.currencies_get200_response import CurrenciesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CurrenciesGet200Response from a JSON string
currencies_get200_response_instance = CurrenciesGet200Response.from_json(json)
# print the JSON string representation of the object
print(CurrenciesGet200Response.to_json())

# convert the object into a dict
currencies_get200_response_dict = currencies_get200_response_instance.to_dict()
# create an instance of CurrenciesGet200Response from a dict
currencies_get200_response_from_dict = CurrenciesGet200Response.from_dict(currencies_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


