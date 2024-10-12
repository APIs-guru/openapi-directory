# PinsAddErrorSchema

Schema for error response from pins.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.pins_add_error_schema import PinsAddErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of PinsAddErrorSchema from a JSON string
pins_add_error_schema_instance = PinsAddErrorSchema.from_json(json)
# print the JSON string representation of the object
print(PinsAddErrorSchema.to_json())

# convert the object into a dict
pins_add_error_schema_dict = pins_add_error_schema_instance.to_dict()
# create an instance of PinsAddErrorSchema from a dict
pins_add_error_schema_from_dict = PinsAddErrorSchema.from_dict(pins_add_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


