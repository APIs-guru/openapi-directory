# Diagnostics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_number** | **int** | the column where the error occurred. | [optional] [readonly] 
**end** | **int** | the ending index of the error. | [optional] [readonly] 
**line_number** | **int** | the line number the error occurred on. | [optional] [readonly] 
**message** | **str** | the error message. | [optional] [readonly] 
**severity** | **str** | the severity of the error. | [optional] [readonly] 
**start** | **int** | the starting index of the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostics import Diagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of Diagnostics from a JSON string
diagnostics_instance = Diagnostics.from_json(json)
# print the JSON string representation of the object
print(Diagnostics.to_json())

# convert the object into a dict
diagnostics_dict = diagnostics_instance.to_dict()
# create an instance of Diagnostics from a dict
diagnostics_from_dict = Diagnostics.from_dict(diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


