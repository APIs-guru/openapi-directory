# ValidateConsumerConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_service_networking_use_permission** | **bool** | Optional. The IAM permission check determines whether the consumer project has &#39;servicenetworking.services.use&#39; permission or not. | [optional] 
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is a project number, as in &#39;12345&#39; {network} is network name. | [optional] 
**consumer_project** | [**ConsumerProject**](ConsumerProject.md) |  | [optional] 
**range_reservation** | [**RangeReservation**](RangeReservation.md) |  | [optional] 
**validate_network** | **bool** | The validations will be performed in the order listed in the ValidationError enum. The first failure will return. If a validation is not requested, then the next one will be performed. SERVICE_NETWORKING_NOT_ENABLED and NETWORK_NOT_PEERED checks are performed for all requests where validation is requested. NETWORK_NOT_FOUND and NETWORK_DISCONNECTED checks are done for requests that have validate_network set to true. | [optional] 

## Example

```python
from openapi_client.models.validate_consumer_config_request import ValidateConsumerConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateConsumerConfigRequest from a JSON string
validate_consumer_config_request_instance = ValidateConsumerConfigRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateConsumerConfigRequest.to_json())

# convert the object into a dict
validate_consumer_config_request_dict = validate_consumer_config_request_instance.to_dict()
# create an instance of ValidateConsumerConfigRequest from a dict
validate_consumer_config_request_from_dict = ValidateConsumerConfigRequest.from_dict(validate_consumer_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


