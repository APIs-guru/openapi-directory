# ExtractFilesRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_resource** | **str** | Resource identifier for folder files should be extracted to. | 
**resource** | **str** | Resource identifier of zip archive to be extracted. | 

## Example

```python
from openapi_client.models.extract_files_request_body import ExtractFilesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractFilesRequestBody from a JSON string
extract_files_request_body_instance = ExtractFilesRequestBody.from_json(json)
# print the JSON string representation of the object
print(ExtractFilesRequestBody.to_json())

# convert the object into a dict
extract_files_request_body_dict = extract_files_request_body_instance.to_dict()
# create an instance of ExtractFilesRequestBody from a dict
extract_files_request_body_from_dict = ExtractFilesRequestBody.from_dict(extract_files_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


