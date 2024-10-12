# Function7


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_type** | [**ApiType**](ApiType.md) |  | [optional] 
**desc** | **str** | Function description | [optional] 
**endpoint** | **str** | Function endpoint | [optional] 
**http_method** | [**HttpMethod**](HttpMethod.md) |  | [optional] 
**name** | **str** | Function name | [optional] 
**request_parameters** | [**List[RequestParameter]**](RequestParameter.md) |  | [optional] 
**response_format** | [**ResponseFormat**](ResponseFormat.md) |  | [optional] 
**type** | [**Type**](Type.md) |  | [optional] 

## Example

```python
from openapi_client.models.function7 import Function7

# TODO update the JSON string below
json = "{}"
# create an instance of Function7 from a JSON string
function7_instance = Function7.from_json(json)
# print the JSON string representation of the object
print(Function7.to_json())

# convert the object into a dict
function7_dict = function7_instance.to_dict()
# create an instance of Function7 from a dict
function7_from_dict = Function7.from_dict(function7_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


