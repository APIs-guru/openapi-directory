# GenerateNetworkReportResponse

The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ \"header\": { \"dateRange\": { \"startDate\": {\"year\": 2018, \"month\": 9, \"day\": 1}, \"endDate\": {\"year\": 2018, \"month\": 9, \"day\": 1} }, \"localizationSettings\": { \"currencyCode\": \"USD\", \"languageCode\": \"en-US\" } } }, { \"row\": { \"dimensionValues\": { \"DATE\": {\"value\": \"20180918\"}, \"APP\": { \"value\": \"ca-app-pub-8123415297019784~1001342552\", displayLabel: \"My app name!\" } }, \"metricValues\": { \"ESTIMATED_EARNINGS\": {\"microsValue\": 6500000} } } }, { \"footer\": {\"matchingRowCount\": 1} }]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**footer** | [**ReportFooter**](ReportFooter.md) |  | [optional] 
**header** | [**ReportHeader**](ReportHeader.md) |  | [optional] 
**row** | [**ReportRow**](ReportRow.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_network_report_response import GenerateNetworkReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateNetworkReportResponse from a JSON string
generate_network_report_response_instance = GenerateNetworkReportResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateNetworkReportResponse.to_json())

# convert the object into a dict
generate_network_report_response_dict = generate_network_report_response_instance.to_dict()
# create an instance of GenerateNetworkReportResponse from a dict
generate_network_report_response_from_dict = GenerateNetworkReportResponse.from_dict(generate_network_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


