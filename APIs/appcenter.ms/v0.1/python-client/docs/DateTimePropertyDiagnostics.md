# DateTimePropertyDiagnostics

Date and time property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **datetime** | Date time property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.date_time_property_diagnostics import DateTimePropertyDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimePropertyDiagnostics from a JSON string
date_time_property_diagnostics_instance = DateTimePropertyDiagnostics.from_json(json)
# print the JSON string representation of the object
print(DateTimePropertyDiagnostics.to_json())

# convert the object into a dict
date_time_property_diagnostics_dict = date_time_property_diagnostics_instance.to_dict()
# create an instance of DateTimePropertyDiagnostics from a dict
date_time_property_diagnostics_from_dict = DateTimePropertyDiagnostics.from_dict(date_time_property_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


