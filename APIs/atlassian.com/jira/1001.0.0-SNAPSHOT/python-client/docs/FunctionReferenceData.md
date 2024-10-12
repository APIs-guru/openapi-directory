# FunctionReferenceData

Details of functions that can be used in advanced searches.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the function. | [optional] 
**is_list** | **str** | Whether the function can take a list of arguments. | [optional] 
**types** | **List[str]** | The data types returned by the function. | [optional] 
**value** | **str** | The function identifier. | [optional] 

## Example

```python
from openapi_client.models.function_reference_data import FunctionReferenceData

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionReferenceData from a JSON string
function_reference_data_instance = FunctionReferenceData.from_json(json)
# print the JSON string representation of the object
print(FunctionReferenceData.to_json())

# convert the object into a dict
function_reference_data_dict = function_reference_data_instance.to_dict()
# create an instance of FunctionReferenceData from a dict
function_reference_data_from_dict = FunctionReferenceData.from_dict(function_reference_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


