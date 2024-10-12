# File

Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is \"REPORT_AVAILABLE\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**file_name** | **str** | The filename of the file. | [optional] 
**format** | **str** | The output format of the report. Only available once the file is available. | [optional] 
**id** | **str** | The unique ID of this report file. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#file\&quot;. | [optional] 
**last_modified_time** | **str** | The timestamp in milliseconds since epoch when this file was last modified. | [optional] 
**report_id** | **str** | The ID of the report this file was generated from. | [optional] 
**status** | **str** | The status of the report file. | [optional] 
**urls** | [**FileUrls**](FileUrls.md) |  | [optional] 

## Example

```python
from openapi_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


