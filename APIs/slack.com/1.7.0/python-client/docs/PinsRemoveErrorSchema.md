# PinsRemoveErrorSchema

Schema for error response from pins.remove method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.pins_remove_error_schema import PinsRemoveErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of PinsRemoveErrorSchema from a JSON string
pins_remove_error_schema_instance = PinsRemoveErrorSchema.from_json(json)
# print the JSON string representation of the object
print(PinsRemoveErrorSchema.to_json())

# convert the object into a dict
pins_remove_error_schema_dict = pins_remove_error_schema_instance.to_dict()
# create an instance of PinsRemoveErrorSchema from a dict
pins_remove_error_schema_from_dict = PinsRemoveErrorSchema.from_dict(pins_remove_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


