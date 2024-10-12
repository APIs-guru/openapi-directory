# InputDirectory

Input directory for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The path of the input directory will be available as a value of an environment variable with AZ_BATCHAI_INPUT_&lt;id&gt; name, where &lt;id&gt; is the value of id attribute. | 
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


