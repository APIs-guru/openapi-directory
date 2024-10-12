# OutputDirectory

Output directory for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_new** | **bool** | Default is true. If false, then the directory is not created and can be any directory path that the user specifies. | [optional] [default to True]
**id** | **str** | The path of the output directory will be available as a value of an environment variable with AZ_BATCHAI_OUTPUT_&lt;id&gt; name, where &lt;id&gt; is the value of id attribute. | 
**path_prefix** | **str** | NOTE: This is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix. | 
**path_suffix** | **str** | The suffix path where the output directory will be created. E.g. models. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix. | [optional] 
**type** | **str** | Default value is Custom. The possible values are Model, Logs, Summary, and Custom. Users can use multiple enums for a single directory. Eg. outPutType&#x3D;&#39;Model,Logs, Summary&#39; | [optional] [default to 'custom']

## Example

```python
from openapi_client.models.output_directory import OutputDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of OutputDirectory from a JSON string
output_directory_instance = OutputDirectory.from_json(json)
# print the JSON string representation of the object
print(OutputDirectory.to_json())

# convert the object into a dict
output_directory_dict = output_directory_instance.to_dict()
# create an instance of OutputDirectory from a dict
output_directory_from_dict = OutputDirectory.from_dict(output_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


