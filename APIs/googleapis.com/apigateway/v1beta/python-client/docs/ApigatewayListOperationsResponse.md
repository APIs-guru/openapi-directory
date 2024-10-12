# ApigatewayListOperationsResponse

The response message for Operations.ListOperations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The standard List next-page token. | [optional] 
**operations** | [**List[ApigatewayOperation]**](ApigatewayOperation.md) | A list of operations that matches the specified filter in the request. | [optional] 

## Example

```python
from openapi_client.models.apigateway_list_operations_response import ApigatewayListOperationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayListOperationsResponse from a JSON string
apigateway_list_operations_response_instance = ApigatewayListOperationsResponse.from_json(json)
# print the JSON string representation of the object
print(ApigatewayListOperationsResponse.to_json())

# convert the object into a dict
apigateway_list_operations_response_dict = apigateway_list_operations_response_instance.to_dict()
# create an instance of ApigatewayListOperationsResponse from a dict
apigateway_list_operations_response_from_dict = ApigatewayListOperationsResponse.from_dict(apigateway_list_operations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


