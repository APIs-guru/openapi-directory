# ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.application_gateways_list_available_server_variables_default_response_details_inner import ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner from a JSON string
application_gateways_list_available_server_variables_default_response_details_inner_instance = ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner.to_json())

# convert the object into a dict
application_gateways_list_available_server_variables_default_response_details_inner_dict = application_gateways_list_available_server_variables_default_response_details_inner_instance.to_dict()
# create an instance of ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner from a dict
application_gateways_list_available_server_variables_default_response_details_inner_from_dict = ApplicationGatewaysListAvailableServerVariablesDefaultResponseDetailsInner.from_dict(application_gateways_list_available_server_variables_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


