# ImportRowError

A resource that reports the import job errors at row level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ImportError]**](ImportError.md) | The list of errors detected in the row. | [optional] 
**row_number** | **int** | The row number where the error was detected. | [optional] 
**vm_name** | **str** | The name of the VM in the row. | [optional] 
**vm_uuid** | **str** | The VM UUID. | [optional] 

## Example

```python
from openapi_client.models.import_row_error import ImportRowError

# TODO update the JSON string below
json = "{}"
# create an instance of ImportRowError from a JSON string
import_row_error_instance = ImportRowError.from_json(json)
# print the JSON string representation of the object
print(ImportRowError.to_json())

# convert the object into a dict
import_row_error_dict = import_row_error_instance.to_dict()
# create an instance of ImportRowError from a dict
import_row_error_from_dict = ImportRowError.from_dict(import_row_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


