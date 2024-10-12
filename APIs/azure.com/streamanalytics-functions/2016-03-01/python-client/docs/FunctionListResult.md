# FunctionListResult

Object containing a list of functions under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Function]**](Function.md) | A list of functions under a streaming job. Populated by a &#39;List&#39; operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.function_list_result import FunctionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionListResult from a JSON string
function_list_result_instance = FunctionListResult.from_json(json)
# print the JSON string representation of the object
print(FunctionListResult.to_json())

# convert the object into a dict
function_list_result_dict = function_list_result_instance.to_dict()
# create an instance of FunctionListResult from a dict
function_list_result_from_dict = FunctionListResult.from_dict(function_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


