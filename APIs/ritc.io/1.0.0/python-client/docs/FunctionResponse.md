# FunctionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_type** | [**ApiType**](ApiType.md) |  | [optional] 
**description** | **str** | Function description | [optional] 
**endpoint** | **str** | Function endpoint | [optional] 
**http_method** | [**HttpMethod**](HttpMethod.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | Function name | [optional] 
**request_parameters** | [**List[RequestParameter]**](RequestParameter.md) |  | [optional] 
**response_format** | [**ResponseFormat**](ResponseFormat.md) |  | [optional] 
**type** | [**Type**](Type.md) |  | [optional] 

## Example

```python
from openapi_client.models.function_response import FunctionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionResponse from a JSON string
function_response_instance = FunctionResponse.from_json(json)
# print the JSON string representation of the object
print(FunctionResponse.to_json())

# convert the object into a dict
function_response_dict = function_response_instance.to_dict()
# create an instance of FunctionResponse from a dict
function_response_from_dict = FunctionResponse.from_dict(function_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


