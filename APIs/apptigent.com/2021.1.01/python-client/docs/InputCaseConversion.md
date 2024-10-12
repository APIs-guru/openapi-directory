# InputCaseConversion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alphacase** | **str** | Case of conversion result | 
**input** | **str** | String containing the text to convert | 

## Example

```python
from openapi_client.models.input_case_conversion import InputCaseConversion

# TODO update the JSON string below
json = "{}"
# create an instance of InputCaseConversion from a JSON string
input_case_conversion_instance = InputCaseConversion.from_json(json)
# print the JSON string representation of the object
print(InputCaseConversion.to_json())

# convert the object into a dict
input_case_conversion_dict = input_case_conversion_instance.to_dict()
# create an instance of InputCaseConversion from a dict
input_case_conversion_from_dict = InputCaseConversion.from_dict(input_case_conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


