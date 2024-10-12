# DisableServiceRequest

Request message for the `DisableService` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_if_service_has_usage** | **str** | Defines the behavior for checking service usage when disabling a service. | [optional] 
**disable_dependent_services** | **bool** | Indicates if services that are enabled and which depend on this service should also be disabled. If not set, an error will be generated if any enabled services depend on the service to be disabled. When set, the service, and any enabled services that depend on it, will be disabled together. | [optional] 

## Example

```python
from openapi_client.models.disable_service_request import DisableServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DisableServiceRequest from a JSON string
disable_service_request_instance = DisableServiceRequest.from_json(json)
# print the JSON string representation of the object
print(DisableServiceRequest.to_json())

# convert the object into a dict
disable_service_request_dict = disable_service_request_instance.to_dict()
# create an instance of DisableServiceRequest from a dict
disable_service_request_from_dict = DisableServiceRequest.from_dict(disable_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


