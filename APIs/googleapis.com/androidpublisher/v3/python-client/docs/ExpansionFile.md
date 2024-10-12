# ExpansionFile

An expansion file. The resource for ExpansionFilesService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_size** | **str** | If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK&#39;s expansion file. The field&#39;s value is the size of the uploaded expansion file in bytes. | [optional] 
**references_version** | **int** | If set, this APK&#39;s expansion file references another APK&#39;s expansion file. The file_size field will not be set. | [optional] 

## Example

```python
from openapi_client.models.expansion_file import ExpansionFile

# TODO update the JSON string below
json = "{}"
# create an instance of ExpansionFile from a JSON string
expansion_file_instance = ExpansionFile.from_json(json)
# print the JSON string representation of the object
print(ExpansionFile.to_json())

# convert the object into a dict
expansion_file_dict = expansion_file_instance.to_dict()
# create an instance of ExpansionFile from a dict
expansion_file_from_dict = ExpansionFile.from_dict(expansion_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


