# ApigatewayListGatewaysResponse

Response message for ApiGatewayService.ListGateways

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateways** | [**List[ApigatewayGateway]**](ApigatewayGateway.md) | Gateways. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable_locations** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.apigateway_list_gateways_response import ApigatewayListGatewaysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayListGatewaysResponse from a JSON string
apigateway_list_gateways_response_instance = ApigatewayListGatewaysResponse.from_json(json)
# print the JSON string representation of the object
print(ApigatewayListGatewaysResponse.to_json())

# convert the object into a dict
apigateway_list_gateways_response_dict = apigateway_list_gateways_response_instance.to_dict()
# create an instance of ApigatewayListGatewaysResponse from a dict
apigateway_list_gateways_response_from_dict = ApigatewayListGatewaysResponse.from_dict(apigateway_list_gateways_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


