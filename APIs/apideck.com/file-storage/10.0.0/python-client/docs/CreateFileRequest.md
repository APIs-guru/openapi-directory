# CreateFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional description of the file. | [optional] 
**drive_id** | **str** | ID of the drive to upload to. | [optional] 
**name** | **str** | The name of the file. | 
**parent_folder_id** | **str** | The parent folder to create the new file within. | 

## Example

```python
from openapi_client.models.create_file_request import CreateFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFileRequest from a JSON string
create_file_request_instance = CreateFileRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFileRequest.to_json())

# convert the object into a dict
create_file_request_dict = create_file_request_instance.to_dict()
# create an instance of CreateFileRequest from a dict
create_file_request_from_dict = CreateFileRequest.from_dict(create_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


