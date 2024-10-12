# DiagnosticCategory

Class representing detector definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DiagnosticCategory resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_category import DiagnosticCategory

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticCategory from a JSON string
diagnostic_category_instance = DiagnosticCategory.from_json(json)
# print the JSON string representation of the object
print(DiagnosticCategory.to_json())

# convert the object into a dict
diagnostic_category_dict = diagnostic_category_instance.to_dict()
# create an instance of DiagnosticCategory from a dict
diagnostic_category_from_dict = DiagnosticCategory.from_dict(diagnostic_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


