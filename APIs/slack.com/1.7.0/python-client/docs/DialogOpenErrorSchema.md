# DialogOpenErrorSchema

Schema for error response from dialog.open method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.dialog_open_error_schema import DialogOpenErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DialogOpenErrorSchema from a JSON string
dialog_open_error_schema_instance = DialogOpenErrorSchema.from_json(json)
# print the JSON string representation of the object
print(DialogOpenErrorSchema.to_json())

# convert the object into a dict
dialog_open_error_schema_dict = dialog_open_error_schema_instance.to_dict()
# create an instance of DialogOpenErrorSchema from a dict
dialog_open_error_schema_from_dict = DialogOpenErrorSchema.from_dict(dialog_open_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


