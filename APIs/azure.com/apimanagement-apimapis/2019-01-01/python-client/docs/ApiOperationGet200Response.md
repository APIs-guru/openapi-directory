# ApiOperationGet200Response

Api Operation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiOperationListByApi200ResponseValueInnerProperties**](ApiOperationListByApi200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_operation_get200_response import ApiOperationGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationGet200Response from a JSON string
api_operation_get200_response_instance = ApiOperationGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiOperationGet200Response.to_json())

# convert the object into a dict
api_operation_get200_response_dict = api_operation_get200_response_instance.to_dict()
# create an instance of ApiOperationGet200Response from a dict
api_operation_get200_response_from_dict = ApiOperationGet200Response.from_dict(api_operation_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


