# DataLakeStorageErrorError

The service error response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The service error code. | [optional] 
**message** | **str** | The service error message. | [optional] 

## Example

```python
from openapi_client.models.data_lake_storage_error_error import DataLakeStorageErrorError

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStorageErrorError from a JSON string
data_lake_storage_error_error_instance = DataLakeStorageErrorError.from_json(json)
# print the JSON string representation of the object
print(DataLakeStorageErrorError.to_json())

# convert the object into a dict
data_lake_storage_error_error_dict = data_lake_storage_error_error_instance.to_dict()
# create an instance of DataLakeStorageErrorError from a dict
data_lake_storage_error_error_from_dict = DataLakeStorageErrorError.from_dict(data_lake_storage_error_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


