# ServiceBusStatusResponseSubscriptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_count** | **float** | The number of messages in the subscription | 
**name** | **str** | The name of the subsciption (prefixed with the topic name) | 

## Example

```python
from openapi_client.models.service_bus_status_response_subscriptions_inner import ServiceBusStatusResponseSubscriptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusStatusResponseSubscriptionsInner from a JSON string
service_bus_status_response_subscriptions_inner_instance = ServiceBusStatusResponseSubscriptionsInner.from_json(json)
# print the JSON string representation of the object
print(ServiceBusStatusResponseSubscriptionsInner.to_json())

# convert the object into a dict
service_bus_status_response_subscriptions_inner_dict = service_bus_status_response_subscriptions_inner_instance.to_dict()
# create an instance of ServiceBusStatusResponseSubscriptionsInner from a dict
service_bus_status_response_subscriptions_inner_from_dict = ServiceBusStatusResponseSubscriptionsInner.from_dict(service_bus_status_response_subscriptions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


