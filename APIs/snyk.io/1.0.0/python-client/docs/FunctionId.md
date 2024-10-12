# FunctionId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_name** | **str** | Class name (Java only). | [optional] 
**file_path** | **str** | Path to file (Javascript only). | [optional] 
**function_name** | **str** | Function name. | [optional] 

## Example

```python
from openapi_client.models.function_id import FunctionId

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionId from a JSON string
function_id_instance = FunctionId.from_json(json)
# print the JSON string representation of the object
print(FunctionId.to_json())

# convert the object into a dict
function_id_dict = function_id_instance.to_dict()
# create an instance of FunctionId from a dict
function_id_from_dict = FunctionId.from_dict(function_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


