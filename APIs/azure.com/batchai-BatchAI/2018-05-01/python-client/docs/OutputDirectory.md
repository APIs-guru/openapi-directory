# OutputDirectory

Output directory for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the output directory. The job can use AZ_BATCHAI_OUTPUT_&lt;id&gt; environment variable to find the directory path, where &lt;id&gt; is the value of id attribute. | 
**path_prefix** | **str** | The prefix path where the output directory will be created. Note, this is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. The full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix. | 
**path_suffix** | **str** | The suffix path where the output directory will be created. E.g. models. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix. | [optional] 

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


