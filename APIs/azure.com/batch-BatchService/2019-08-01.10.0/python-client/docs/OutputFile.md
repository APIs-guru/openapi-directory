# OutputFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**OutputFileDestination**](OutputFileDestination.md) |  | 
**file_pattern** | **str** | Both relative and absolute paths are supported. Relative paths are relative to the Task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. Brackets can include a negation to match any character not specified (for example [!abc] matches any character but a, b, or c). If a file name starts with \&quot;.\&quot; it is ignored by default but may be matched by specifying it explicitly (for example *.gif will not match .a.gif, but .*.gif will). A simple example: **\\*.txt matches any file that does not start in &#39;.&#39; and ends with .txt in the Task working directory or any subdirectory. If the filename contains a wildcard character it can be escaped using brackets (for example abc[*] would match a file named abc*). Note that both \\ and / are treated as directory separators on Windows, but only / is on Linux. Environment variables (%var% on Windows or $var on Linux) are expanded prior to the pattern being applied. | 
**upload_options** | [**OutputFileUploadOptions**](OutputFileUploadOptions.md) |  | 

## Example

```python
from openapi_client.models.output_file import OutputFile

# TODO update the JSON string below
json = "{}"
# create an instance of OutputFile from a JSON string
output_file_instance = OutputFile.from_json(json)
# print the JSON string representation of the object
print(OutputFile.to_json())

# convert the object into a dict
output_file_dict = output_file_instance.to_dict()
# create an instance of OutputFile from a dict
output_file_from_dict = OutputFile.from_dict(output_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


