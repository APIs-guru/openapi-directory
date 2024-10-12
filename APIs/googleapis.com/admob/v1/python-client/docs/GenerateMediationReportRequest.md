# GenerateMediationReportRequest

Request to generate an AdMob mediation report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_spec** | [**MediationReportSpec**](MediationReportSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_mediation_report_request import GenerateMediationReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateMediationReportRequest from a JSON string
generate_mediation_report_request_instance = GenerateMediationReportRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateMediationReportRequest.to_json())

# convert the object into a dict
generate_mediation_report_request_dict = generate_mediation_report_request_instance.to_dict()
# create an instance of GenerateMediationReportRequest from a dict
generate_mediation_report_request_from_dict = GenerateMediationReportRequest.from_dict(generate_mediation_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


