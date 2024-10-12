# NonCompliantFile

Details about files that caused a compliance check to fail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_command** | **str** | Command to display the non-compliant files. | [optional] 
**path** | **str** | display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using &#39;path&#39;. Empty if &#x60;display_command&#x60; is set. | [optional] 
**reason** | **str** | Explains why a file is non compliant for a CIS check. | [optional] 

## Example

```python
from openapi_client.models.non_compliant_file import NonCompliantFile

# TODO update the JSON string below
json = "{}"
# create an instance of NonCompliantFile from a JSON string
non_compliant_file_instance = NonCompliantFile.from_json(json)
# print the JSON string representation of the object
print(NonCompliantFile.to_json())

# convert the object into a dict
non_compliant_file_dict = non_compliant_file_instance.to_dict()
# create an instance of NonCompliantFile from a dict
non_compliant_file_from_dict = NonCompliantFile.from_dict(non_compliant_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


