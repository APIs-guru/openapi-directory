# ImportDataFile

A resource that represents a payload file in an import job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the file was created. | [optional] [readonly] 
**display_name** | **str** | User-friendly display name. Maximum length is 63 characters. | [optional] 
**format** | **str** | Required. The payload format. | [optional] 
**name** | **str** | Output only. The name of the file. | [optional] [readonly] 
**state** | **str** | Output only. The state of the import data file. | [optional] [readonly] 
**upload_file_info** | [**UploadFileInfo**](UploadFileInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_data_file import ImportDataFile

# TODO update the JSON string below
json = "{}"
# create an instance of ImportDataFile from a JSON string
import_data_file_instance = ImportDataFile.from_json(json)
# print the JSON string representation of the object
print(ImportDataFile.to_json())

# convert the object into a dict
import_data_file_dict = import_data_file_instance.to_dict()
# create an instance of ImportDataFile from a dict
import_data_file_from_dict = ImportDataFile.from_dict(import_data_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


