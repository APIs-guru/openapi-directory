# ApplicationGatewayListResult

Response for ListApplicationGateways Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[ApplicationGateway]**](ApplicationGateway.md) | List of ApplicationGateways in a resource group | [optional] 

## Example

```python
from openapi_client.models.application_gateway_list_result import ApplicationGatewayListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayListResult from a JSON string
application_gateway_list_result_instance = ApplicationGatewayListResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayListResult.to_json())

# convert the object into a dict
application_gateway_list_result_dict = application_gateway_list_result_instance.to_dict()
# create an instance of ApplicationGatewayListResult from a dict
application_gateway_list_result_from_dict = ApplicationGatewayListResult.from_dict(application_gateway_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


