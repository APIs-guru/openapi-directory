# ImportErrors

The list of import errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ImportError]**](ImportError.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.import_errors import ImportErrors

# TODO update the JSON string below
json = "{}"
# create an instance of ImportErrors from a JSON string
import_errors_instance = ImportErrors.from_json(json)
# print the JSON string representation of the object
print(ImportErrors.to_json())

# convert the object into a dict
import_errors_dict = import_errors_instance.to_dict()
# create an instance of ImportErrors from a dict
import_errors_from_dict = ImportErrors.from_dict(import_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


