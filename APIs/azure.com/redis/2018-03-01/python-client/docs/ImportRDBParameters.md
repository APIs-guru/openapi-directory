# ImportRDBParameters

Parameters for Redis import operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **List[str]** | files to import. | 
**format** | **str** | File format. | [optional] 

## Example

```python
from openapi_client.models.import_rdb_parameters import ImportRDBParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ImportRDBParameters from a JSON string
import_rdb_parameters_instance = ImportRDBParameters.from_json(json)
# print the JSON string representation of the object
print(ImportRDBParameters.to_json())

# convert the object into a dict
import_rdb_parameters_dict = import_rdb_parameters_instance.to_dict()
# create an instance of ImportRDBParameters from a dict
import_rdb_parameters_from_dict = ImportRDBParameters.from_dict(import_rdb_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


