# ResponseCartScriptListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**scripts** | [**List[Script]**](Script.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_cart_script_list_result import ResponseCartScriptListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCartScriptListResult from a JSON string
response_cart_script_list_result_instance = ResponseCartScriptListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCartScriptListResult.to_json())

# convert the object into a dict
response_cart_script_list_result_dict = response_cart_script_list_result_instance.to_dict()
# create an instance of ResponseCartScriptListResult from a dict
response_cart_script_list_result_from_dict = ResponseCartScriptListResult.from_dict(response_cart_script_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


