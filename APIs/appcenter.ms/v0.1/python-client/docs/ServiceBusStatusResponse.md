# ServiceBusStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**subscriptions** | [**List[ServiceBusStatusResponseSubscriptionsInner]**](ServiceBusStatusResponseSubscriptionsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_bus_status_response import ServiceBusStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusStatusResponse from a JSON string
service_bus_status_response_instance = ServiceBusStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ServiceBusStatusResponse.to_json())

# convert the object into a dict
service_bus_status_response_dict = service_bus_status_response_instance.to_dict()
# create an instance of ServiceBusStatusResponse from a dict
service_bus_status_response_from_dict = ServiceBusStatusResponse.from_dict(service_bus_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


