# DialogOpenSchema

Schema for successful response from dialog.open method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.dialog_open_schema import DialogOpenSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DialogOpenSchema from a JSON string
dialog_open_schema_instance = DialogOpenSchema.from_json(json)
# print the JSON string representation of the object
print(DialogOpenSchema.to_json())

# convert the object into a dict
dialog_open_schema_dict = dialog_open_schema_instance.to_dict()
# create an instance of DialogOpenSchema from a dict
dialog_open_schema_from_dict = DialogOpenSchema.from_dict(dialog_open_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


