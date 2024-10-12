# ExportModelRequest

Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**ModelExportOutputConfig**](ModelExportOutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_model_request import ExportModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportModelRequest from a JSON string
export_model_request_instance = ExportModelRequest.from_json(json)
# print the JSON string representation of the object
print(ExportModelRequest.to_json())

# convert the object into a dict
export_model_request_dict = export_model_request_instance.to_dict()
# create an instance of ExportModelRequest from a dict
export_model_request_from_dict = ExportModelRequest.from_dict(export_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


