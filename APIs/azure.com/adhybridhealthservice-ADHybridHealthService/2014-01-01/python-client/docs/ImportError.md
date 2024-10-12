# ImportError

The import error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm_step_type** | **str** | The operation type specific  to error reporting. | [optional] 
**change_not_reimported** | [**ChangeNotReimported**](ChangeNotReimported.md) |  | [optional] 
**connector_id** | **str** | The connector Id. | [optional] 
**cs_object_id** | **str** | The object Id. | [optional] 
**dn** | **str** | The distinguished name. | [optional] 
**extension_error_info** | [**ExtensionErrorInfo**](ExtensionErrorInfo.md) |  | [optional] 
**id** | **str** | The error Id. | [optional] 
**retry_count** | **int** | The retry count. | [optional] 
**rule_error_info** | [**RuleErrorInfo**](RuleErrorInfo.md) |  | [optional] 
**run_step_result_id** | **str** | The run step result Id. | [optional] 
**time_first_occurred** | **datetime** | The time when the import error first occurred. | [optional] 
**time_occurred** | **datetime** | The time when the import error occurred. | [optional] 
**type** | **str** | The type of error. | [optional] 

## Example

```python
from openapi_client.models.import_error import ImportError

# TODO update the JSON string below
json = "{}"
# create an instance of ImportError from a JSON string
import_error_instance = ImportError.from_json(json)
# print the JSON string representation of the object
print(ImportError.to_json())

# convert the object into a dict
import_error_dict = import_error_instance.to_dict()
# create an instance of ImportError from a dict
import_error_from_dict = ImportError.from_dict(import_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


