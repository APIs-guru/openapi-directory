# FileStatuses

Data Lake Store file status list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_status** | [**List[FileStatusProperties]**](FileStatusProperties.md) | the object containing the list of properties of the files. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_statuses import FileStatuses

# TODO update the JSON string below
json = "{}"
# create an instance of FileStatuses from a JSON string
file_statuses_instance = FileStatuses.from_json(json)
# print the JSON string representation of the object
print(FileStatuses.to_json())

# convert the object into a dict
file_statuses_dict = file_statuses_instance.to_dict()
# create an instance of FileStatuses from a dict
file_statuses_from_dict = FileStatuses.from_dict(file_statuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


