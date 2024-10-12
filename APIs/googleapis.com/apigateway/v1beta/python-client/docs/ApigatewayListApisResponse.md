# ApigatewayListApisResponse

Response message for ApiGatewayService.ListApis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apis** | [**List[ApigatewayApi]**](ApigatewayApi.md) | APIs. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable_locations** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.apigateway_list_apis_response import ApigatewayListApisResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayListApisResponse from a JSON string
apigateway_list_apis_response_instance = ApigatewayListApisResponse.from_json(json)
# print the JSON string representation of the object
print(ApigatewayListApisResponse.to_json())

# convert the object into a dict
apigateway_list_apis_response_dict = apigateway_list_apis_response_instance.to_dict()
# create an instance of ApigatewayListApisResponse from a dict
apigateway_list_apis_response_from_dict = ApigatewayListApisResponse.from_dict(apigateway_list_apis_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


