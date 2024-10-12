# SubscribeDataExchangeRequest

Message for subscribing to a Data Exchange.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | Required. The parent resource path of the Subscription. e.g. &#x60;projects/subscriberproject/locations/US&#x60; | [optional] 
**subscriber_contact** | **str** | Email of the subscriber. | [optional] 
**subscription** | **str** | Required. Name of the subscription to create. e.g. &#x60;subscription1&#x60; | [optional] 

## Example

```python
from openapi_client.models.subscribe_data_exchange_request import SubscribeDataExchangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscribeDataExchangeRequest from a JSON string
subscribe_data_exchange_request_instance = SubscribeDataExchangeRequest.from_json(json)
# print the JSON string representation of the object
print(SubscribeDataExchangeRequest.to_json())

# convert the object into a dict
subscribe_data_exchange_request_dict = subscribe_data_exchange_request_instance.to_dict()
# create an instance of SubscribeDataExchangeRequest from a dict
subscribe_data_exchange_request_from_dict = SubscribeDataExchangeRequest.from_dict(subscribe_data_exchange_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


