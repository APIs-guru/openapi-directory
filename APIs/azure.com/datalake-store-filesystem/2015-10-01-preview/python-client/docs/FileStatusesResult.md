# FileStatusesResult

Data Lake Store filesystem file status list information response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_statuses** | [**FileStatuses**](FileStatuses.md) |  | [optional] 

## Example

```python
from openapi_client.models.file_statuses_result import FileStatusesResult

# TODO update the JSON string below
json = "{}"
# create an instance of FileStatusesResult from a JSON string
file_statuses_result_instance = FileStatusesResult.from_json(json)
# print the JSON string representation of the object
print(FileStatusesResult.to_json())

# convert the object into a dict
file_statuses_result_dict = file_statuses_result_instance.to_dict()
# create an instance of FileStatusesResult from a dict
file_statuses_result_from_dict = FileStatusesResult.from_dict(file_statuses_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


