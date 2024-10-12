# ApigatewayListApiConfigsResponse

Response message for ApiGatewayService.ListApiConfigs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_configs** | [**List[ApigatewayApiConfig]**](ApigatewayApiConfig.md) | API Configs. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable_locations** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.apigateway_list_api_configs_response import ApigatewayListApiConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayListApiConfigsResponse from a JSON string
apigateway_list_api_configs_response_instance = ApigatewayListApiConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ApigatewayListApiConfigsResponse.to_json())

# convert the object into a dict
apigateway_list_api_configs_response_dict = apigateway_list_api_configs_response_instance.to_dict()
# create an instance of ApigatewayListApiConfigsResponse from a dict
apigateway_list_api_configs_response_from_dict = ApigatewayListApiConfigsResponse.from_dict(apigateway_list_api_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


