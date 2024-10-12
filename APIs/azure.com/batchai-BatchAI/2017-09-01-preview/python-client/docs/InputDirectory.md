# InputDirectory

Input directory for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | It will be available for the job as an environment variable under AZ_BATCHAI_INPUT_id. The service will also provide the following  environment variable: AZ_BATCHAI_PREV_OUTPUT_Name. The value of the variable will be populated if the job is being retried after a previous failure, otherwise it will be set to nothing. | 
**path** | **str** |  | 

## Example

```python
from openapi_client.models.input_directory import InputDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of InputDirectory from a JSON string
input_directory_instance = InputDirectory.from_json(json)
# print the JSON string representation of the object
print(InputDirectory.to_json())

# convert the object into a dict
input_directory_dict = input_directory_instance.to_dict()
# create an instance of InputDirectory from a dict
input_directory_from_dict = InputDirectory.from_dict(input_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


