# FileList

List of files for a report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**items** | [**List[File]**](File.md) | The files returned in this response. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#fileList\&quot;. | [optional] 
**next_page_token** | **str** | Continuation token used to page through files. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.file_list import FileList

# TODO update the JSON string below
json = "{}"
# create an instance of FileList from a JSON string
file_list_instance = FileList.from_json(json)
# print the JSON string representation of the object
print(FileList.to_json())

# convert the object into a dict
file_list_dict = file_list_instance.to_dict()
# create an instance of FileList from a dict
file_list_from_dict = FileList.from_dict(file_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


