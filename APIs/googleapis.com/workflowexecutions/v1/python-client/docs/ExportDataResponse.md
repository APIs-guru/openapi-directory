# ExportDataResponse

Response for the ExportData method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The JSON string with customer data and metadata for an execution with the given name | [optional] 

## Example

```python
from openapi_client.models.export_data_response import ExportDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDataResponse from a JSON string
export_data_response_instance = ExportDataResponse.from_json(json)
# print the JSON string representation of the object
print(ExportDataResponse.to_json())

# convert the object into a dict
export_data_response_dict = export_data_response_instance.to_dict()
# create an instance of ExportDataResponse from a dict
export_data_response_from_dict = ExportDataResponse.from_dict(export_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


