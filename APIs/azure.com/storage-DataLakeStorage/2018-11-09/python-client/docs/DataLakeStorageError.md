# DataLakeStorageError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DataLakeStorageErrorError**](DataLakeStorageErrorError.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_lake_storage_error import DataLakeStorageError

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStorageError from a JSON string
data_lake_storage_error_instance = DataLakeStorageError.from_json(json)
# print the JSON string representation of the object
print(DataLakeStorageError.to_json())

# convert the object into a dict
data_lake_storage_error_dict = data_lake_storage_error_instance.to_dict()
# create an instance of DataLakeStorageError from a dict
data_lake_storage_error_from_dict = DataLakeStorageError.from_dict(data_lake_storage_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


