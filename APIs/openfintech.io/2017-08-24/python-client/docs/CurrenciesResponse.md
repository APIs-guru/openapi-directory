# CurrenciesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Currency]**](Currency.md) |  | [optional] 
**links** | [**ResponseLinks**](ResponseLinks.md) |  | [optional] 
**meta** | [**ResponseMeta**](ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.currencies_response import CurrenciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CurrenciesResponse from a JSON string
currencies_response_instance = CurrenciesResponse.from_json(json)
# print the JSON string representation of the object
print(CurrenciesResponse.to_json())

# convert the object into a dict
currencies_response_dict = currencies_response_instance.to_dict()
# create an instance of CurrenciesResponse from a dict
currencies_response_from_dict = CurrenciesResponse.from_dict(currencies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


