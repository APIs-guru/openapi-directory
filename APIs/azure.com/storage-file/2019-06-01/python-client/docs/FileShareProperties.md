# FileShareProperties

The properties of the file share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified_time** | **datetime** | Returns the date and time the share was last modified. | [optional] [readonly] 
**metadata** | **Dict[str, str]** | A name-value pair to associate with the share as metadata. | [optional] 
**share_quota** | **int** | The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400. | [optional] 

## Example

```python
from openapi_client.models.file_share_properties import FileShareProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareProperties from a JSON string
file_share_properties_instance = FileShareProperties.from_json(json)
# print the JSON string representation of the object
print(FileShareProperties.to_json())

# convert the object into a dict
file_share_properties_dict = file_share_properties_instance.to_dict()
# create an instance of FileShareProperties from a dict
file_share_properties_from_dict = FileShareProperties.from_dict(file_share_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


