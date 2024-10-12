# ApplicationGatewayAvailableSslPredefinedPolicies

Response for ApplicationGatewayAvailableSslOptions API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | **List[object]** | List of available Ssl predefined policy. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_available_ssl_predefined_policies import ApplicationGatewayAvailableSslPredefinedPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayAvailableSslPredefinedPolicies from a JSON string
application_gateway_available_ssl_predefined_policies_instance = ApplicationGatewayAvailableSslPredefinedPolicies.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayAvailableSslPredefinedPolicies.to_json())

# convert the object into a dict
application_gateway_available_ssl_predefined_policies_dict = application_gateway_available_ssl_predefined_policies_instance.to_dict()
# create an instance of ApplicationGatewayAvailableSslPredefinedPolicies from a dict
application_gateway_available_ssl_predefined_policies_from_dict = ApplicationGatewayAvailableSslPredefinedPolicies.from_dict(application_gateway_available_ssl_predefined_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


