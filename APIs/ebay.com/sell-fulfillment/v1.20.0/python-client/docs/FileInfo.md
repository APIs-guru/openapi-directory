# FileInfo

This type is used by the <strong>files</strong> array, which shows the name, ID, file type, and upload date for each provided evidential file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | The unique identifier of the evidence file. | [optional] 
**file_type** | **str** | The type of file uploaded. Supported file extensions are .JPEG, .JPG, and .PNG., and maximum file size allowed is 1.5 MB. | [optional] 
**name** | **str** | The seller-provided name of the evidence file. | [optional] 
**uploaded_date** | **str** | The timestamp in this field shows the date/time when the seller uploaded the evidential document to eBay. &lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.file_info import FileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FileInfo from a JSON string
file_info_instance = FileInfo.from_json(json)
# print the JSON string representation of the object
print(FileInfo.to_json())

# convert the object into a dict
file_info_dict = file_info_instance.to_dict()
# create an instance of FileInfo from a dict
file_info_from_dict = FileInfo.from_dict(file_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


