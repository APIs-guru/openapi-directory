# InputStringComparison


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compare** | **str** | Comparison string | 
**input** | **str** | Original string | 
**lower** | **str** | Convert strings to lowercase before comparison | 
**trim** | **str** | Trim strings before comparison | 

## Example

```python
from openapi_client.models.input_string_comparison import InputStringComparison

# TODO update the JSON string below
json = "{}"
# create an instance of InputStringComparison from a JSON string
input_string_comparison_instance = InputStringComparison.from_json(json)
# print the JSON string representation of the object
print(InputStringComparison.to_json())

# convert the object into a dict
input_string_comparison_dict = input_string_comparison_instance.to_dict()
# create an instance of InputStringComparison from a dict
input_string_comparison_from_dict = InputStringComparison.from_dict(input_string_comparison_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


