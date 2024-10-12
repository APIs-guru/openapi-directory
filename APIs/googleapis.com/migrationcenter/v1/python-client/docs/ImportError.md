# ImportError

A resource that reports the errors encountered while processing an import job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | **str** | The error information. | [optional] 
**severity** | **str** | The severity of the error. | [optional] 

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


