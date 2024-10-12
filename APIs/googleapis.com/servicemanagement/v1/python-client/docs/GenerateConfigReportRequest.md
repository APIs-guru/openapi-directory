# GenerateConfigReportRequest

Request message for GenerateConfigReport method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_config** | **Dict[str, object]** | Required. Service configuration for which we want to generate the report. For this version of API, the supported types are google.api.servicemanagement.v1.ConfigRef, google.api.servicemanagement.v1.ConfigSource, and google.api.Service | [optional] 
**old_config** | **Dict[str, object]** | Optional. Service configuration against which the comparison will be done. For this version of API, the supported types are google.api.servicemanagement.v1.ConfigRef, google.api.servicemanagement.v1.ConfigSource, and google.api.Service | [optional] 

## Example

```python
from openapi_client.models.generate_config_report_request import GenerateConfigReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateConfigReportRequest from a JSON string
generate_config_report_request_instance = GenerateConfigReportRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateConfigReportRequest.to_json())

# convert the object into a dict
generate_config_report_request_dict = generate_config_report_request_instance.to_dict()
# create an instance of GenerateConfigReportRequest from a dict
generate_config_report_request_from_dict = GenerateConfigReportRequest.from_dict(generate_config_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


