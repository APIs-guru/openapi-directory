# ApplicationGatewaysListAvailableServerVariablesDefaultResponse

Common error representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**details** | [**List[ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner]**](ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner.md) | Error details. | [optional] 
**inner_error** | **str** | Inner error message. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.application_gateways_list_available_server_variables_default_response import ApplicationGatewaysListAvailableServerVariablesDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaysListAvailableServerVariablesDefaultResponse from a JSON string
application_gateways_list_available_server_variables_default_response_instance = ApplicationGatewaysListAvailableServerVariablesDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaysListAvailableServerVariablesDefaultResponse.to_json())

# convert the object into a dict
application_gateways_list_available_server_variables_default_response_dict = application_gateways_list_available_server_variables_default_response_instance.to_dict()
# create an instance of ApplicationGatewaysListAvailableServerVariablesDefaultResponse from a dict
application_gateways_list_available_server_variables_default_response_from_dict = ApplicationGatewaysListAvailableServerVariablesDefaultResponse.from_dict(application_gateways_list_available_server_variables_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


