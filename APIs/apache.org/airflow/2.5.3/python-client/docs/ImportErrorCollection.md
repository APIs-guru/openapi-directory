# ImportErrorCollection

Collection of import errors.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**import_errors** | [**List[ImportError]**](ImportError.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_error_collection import ImportErrorCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ImportErrorCollection from a JSON string
import_error_collection_instance = ImportErrorCollection.from_json(json)
# print the JSON string representation of the object
print(ImportErrorCollection.to_json())

# convert the object into a dict
import_error_collection_dict = import_error_collection_instance.to_dict()
# create an instance of ImportErrorCollection from a dict
import_error_collection_from_dict = ImportErrorCollection.from_dict(import_error_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


