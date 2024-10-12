# ExchangersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Exchanger]**](Exchanger.md) |  | [optional] 
**links** | [**ResponseLinks**](ResponseLinks.md) |  | [optional] 
**meta** | [**ResponseMeta**](ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.exchangers_response import ExchangersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangersResponse from a JSON string
exchangers_response_instance = ExchangersResponse.from_json(json)
# print the JSON string representation of the object
print(ExchangersResponse.to_json())

# convert the object into a dict
exchangers_response_dict = exchangers_response_instance.to_dict()
# create an instance of ExchangersResponse from a dict
exchangers_response_from_dict = ExchangersResponse.from_dict(exchangers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


