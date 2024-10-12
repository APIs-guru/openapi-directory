# FileOccurrence

FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributions** | **List[str]** | This field provides a place for the SPDX data creator to record, at the file level, acknowledgements that may be needed to be communicated in some contexts | [optional] 
**comment** | **str** | This field provides a place for the SPDX file creator to record any general comments about the file | [optional] 
**contributors** | **List[str]** | This field provides a place for the SPDX file creator to record file contributors | [optional] 
**copyright** | **str** | Identify the copyright holder of the file, as well as any dates present | [optional] 
**files_license_info** | **List[str]** | This field contains the license information actually found in the file, if any | [optional] 
**id** | **str** | Uniquely identify any element in an SPDX document which may be referenced by other elements | [optional] 
**license_concluded** | [**License**](License.md) |  | [optional] 
**notice** | **str** | This field provides a place for the SPDX file creator to record license notices or other such related notices found in the file | [optional] 

## Example

```python
from openapi_client.models.file_occurrence import FileOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of FileOccurrence from a JSON string
file_occurrence_instance = FileOccurrence.from_json(json)
# print the JSON string representation of the object
print(FileOccurrence.to_json())

# convert the object into a dict
file_occurrence_dict = file_occurrence_instance.to_dict()
# create an instance of FileOccurrence from a dict
file_occurrence_from_dict = FileOccurrence.from_dict(file_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


