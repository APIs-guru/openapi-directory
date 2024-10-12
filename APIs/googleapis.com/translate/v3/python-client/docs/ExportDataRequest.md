# ExportDataRequest

Request message for ExportData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**DatasetOutputConfig**](DatasetOutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_data_request import ExportDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDataRequest from a JSON string
export_data_request_instance = ExportDataRequest.from_json(json)
# print the JSON string representation of the object
print(ExportDataRequest.to_json())

# convert the object into a dict
export_data_request_dict = export_data_request_instance.to_dict()
# create an instance of ExportDataRequest from a dict
export_data_request_from_dict = ExportDataRequest.from_dict(export_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


