# SubscribeDataExchangeResponse

Message for response when you subscribe to a Data Exchange.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**Subscription**](Subscription.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscribe_data_exchange_response import SubscribeDataExchangeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscribeDataExchangeResponse from a JSON string
subscribe_data_exchange_response_instance = SubscribeDataExchangeResponse.from_json(json)
# print the JSON string representation of the object
print(SubscribeDataExchangeResponse.to_json())

# convert the object into a dict
subscribe_data_exchange_response_dict = subscribe_data_exchange_response_instance.to_dict()
# create an instance of SubscribeDataExchangeResponse from a dict
subscribe_data_exchange_response_from_dict = SubscribeDataExchangeResponse.from_dict(subscribe_data_exchange_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


