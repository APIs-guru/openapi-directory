# CompressFilesRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_name** | **str** | Name of the zip archive to create. If left blank, current date will be used. | [optional] 
**parent_resource** | **str** | Resource identifier of the folder where zip archive should be created. | [optional] 
**resources** | **List[str]** | Resource identifiers for file(s)/folder(s) to include in new zip file | 

## Example

```python
from openapi_client.models.compress_files_request_body import CompressFilesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CompressFilesRequestBody from a JSON string
compress_files_request_body_instance = CompressFilesRequestBody.from_json(json)
# print the JSON string representation of the object
print(CompressFilesRequestBody.to_json())

# convert the object into a dict
compress_files_request_body_dict = compress_files_request_body_instance.to_dict()
# create an instance of CompressFilesRequestBody from a dict
compress_files_request_body_from_dict = CompressFilesRequestBody.from_dict(compress_files_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


