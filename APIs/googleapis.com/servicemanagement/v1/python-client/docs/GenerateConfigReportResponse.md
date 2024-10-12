# GenerateConfigReportResponse

Response message for GenerateConfigReport method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_reports** | [**List[ChangeReport]**](ChangeReport.md) | list of ChangeReport, each corresponding to comparison between two service configurations. | [optional] 
**diagnostics** | [**List[Diagnostic]**](Diagnostic.md) | Errors / Linter warnings associated with the service definition this report belongs to. | [optional] 
**id** | **str** | ID of the service configuration this report belongs to. | [optional] 
**service_name** | **str** | Name of the service this report belongs to. | [optional] 

## Example

```python
from openapi_client.models.generate_config_report_response import GenerateConfigReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateConfigReportResponse from a JSON string
generate_config_report_response_instance = GenerateConfigReportResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateConfigReportResponse.to_json())

# convert the object into a dict
generate_config_report_response_dict = generate_config_report_response_instance.to_dict()
# create an instance of GenerateConfigReportResponse from a dict
generate_config_report_response_from_dict = GenerateConfigReportResponse.from_dict(generate_config_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


