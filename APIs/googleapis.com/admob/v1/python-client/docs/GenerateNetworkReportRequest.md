# GenerateNetworkReportRequest

Request to generate an AdMob Network report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_spec** | [**NetworkReportSpec**](NetworkReportSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_network_report_request import GenerateNetworkReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateNetworkReportRequest from a JSON string
generate_network_report_request_instance = GenerateNetworkReportRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateNetworkReportRequest.to_json())

# convert the object into a dict
generate_network_report_request_dict = generate_network_report_request_instance.to_dict()
# create an instance of GenerateNetworkReportRequest from a dict
generate_network_report_request_from_dict = GenerateNetworkReportRequest.from_dict(generate_network_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


