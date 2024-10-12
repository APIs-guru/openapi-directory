# InputDirectory

Input directory for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID for the input directory. The job can use AZ_BATCHAI_INPUT_&lt;id&gt; environment variable to find the directory path, where &lt;id&gt; is the value of id attribute. | 
**path** | **str** | The path to the input directory. | 

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


