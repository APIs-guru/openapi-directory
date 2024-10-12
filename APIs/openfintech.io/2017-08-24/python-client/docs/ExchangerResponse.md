# ExchangerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Exchanger**](Exchanger.md) |  | [optional] 

## Example

```python
from openapi_client.models.exchanger_response import ExchangerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangerResponse from a JSON string
exchanger_response_instance = ExchangerResponse.from_json(json)
# print the JSON string representation of the object
print(ExchangerResponse.to_json())

# convert the object into a dict
exchanger_response_dict = exchanger_response_instance.to_dict()
# create an instance of ExchangerResponse from a dict
exchanger_response_from_dict = ExchangerResponse.from_dict(exchanger_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


