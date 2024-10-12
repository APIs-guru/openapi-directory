# ListImportDataFilesResponse

Response for listing payload files of an import job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**import_data_files** | [**List[ImportDataFile]**](ImportDataFile.md) | The list of import data files. | [optional] 
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_import_data_files_response import ListImportDataFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListImportDataFilesResponse from a JSON string
list_import_data_files_response_instance = ListImportDataFilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListImportDataFilesResponse.to_json())

# convert the object into a dict
list_import_data_files_response_dict = list_import_data_files_response_instance.to_dict()
# create an instance of ListImportDataFilesResponse from a dict
list_import_data_files_response_from_dict = ListImportDataFilesResponse.from_dict(list_import_data_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


