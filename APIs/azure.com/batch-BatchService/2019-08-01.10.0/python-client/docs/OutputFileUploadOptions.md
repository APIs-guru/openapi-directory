# OutputFileUploadOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_condition** | [**OutputFileUploadCondition**](OutputFileUploadCondition.md) |  | 

## Example

```python
from openapi_client.models.output_file_upload_options import OutputFileUploadOptions

# TODO update the JSON string below
json = "{}"
# create an instance of OutputFileUploadOptions from a JSON string
output_file_upload_options_instance = OutputFileUploadOptions.from_json(json)
# print the JSON string representation of the object
print(OutputFileUploadOptions.to_json())

# convert the object into a dict
output_file_upload_options_dict = output_file_upload_options_instance.to_dict()
# create an instance of OutputFileUploadOptions from a dict
output_file_upload_options_from_dict = OutputFileUploadOptions.from_dict(output_file_upload_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


