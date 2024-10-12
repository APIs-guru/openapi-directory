# OutputDirectory

Output directory for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_new** | **bool** | Default is true. If false, then the directory is not created and can be any directory path that the user specifies. | [optional] [default to True]
**id** | **str** | It will be available for the job as an environment variable under AZ_BATCHAI_OUTPUT_id. | 
**path_prefix** | **str** | NOTE: This is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. | 
**path_suffix** | **str** | The suffix path where the output directory will be created. | [optional] 
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


