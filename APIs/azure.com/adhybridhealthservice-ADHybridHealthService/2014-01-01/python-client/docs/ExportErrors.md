# ExportErrors

The list of export errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ExportError]**](ExportError.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.export_errors import ExportErrors

# TODO update the JSON string below
json = "{}"
# create an instance of ExportErrors from a JSON string
export_errors_instance = ExportErrors.from_json(json)
# print the JSON string representation of the object
print(ExportErrors.to_json())

# convert the object into a dict
export_errors_dict = export_errors_instance.to_dict()
# create an instance of ExportErrors from a dict
export_errors_from_dict = ExportErrors.from_dict(export_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


