# ExportModelOutputInfo

Further describes the output of model export. Supplements ModelExportOutputConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_output_directory** | **str** | The full path of the Google Cloud Storage directory created, into which the model will be exported. | [optional] 

## Example

```python
from openapi_client.models.export_model_output_info import ExportModelOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExportModelOutputInfo from a JSON string
export_model_output_info_instance = ExportModelOutputInfo.from_json(json)
# print the JSON string representation of the object
print(ExportModelOutputInfo.to_json())

# convert the object into a dict
export_model_output_info_dict = export_model_output_info_instance.to_dict()
# create an instance of ExportModelOutputInfo from a dict
export_model_output_info_from_dict = ExportModelOutputInfo.from_dict(export_model_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


