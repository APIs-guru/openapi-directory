# FileIODetails

Metadata for a File connector used by the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_pattern** | **str** | File Pattern used to access files by the connector. | [optional] 

## Example

```python
from openapi_client.models.file_io_details import FileIODetails

# TODO update the JSON string below
json = "{}"
# create an instance of FileIODetails from a JSON string
file_io_details_instance = FileIODetails.from_json(json)
# print the JSON string representation of the object
print(FileIODetails.to_json())

# convert the object into a dict
file_io_details_dict = file_io_details_instance.to_dict()
# create an instance of FileIODetails from a dict
file_io_details_from_dict = FileIODetails.from_dict(file_io_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


