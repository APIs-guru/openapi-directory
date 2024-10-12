# ListReportConfigsResponse

Response message for listing report configs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**report_configs** | [**List[ReportConfig]**](ReportConfig.md) | A list of report configs. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_report_configs_response import ListReportConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReportConfigsResponse from a JSON string
list_report_configs_response_instance = ListReportConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReportConfigsResponse.to_json())

# convert the object into a dict
list_report_configs_response_dict = list_report_configs_response_instance.to_dict()
# create an instance of ListReportConfigsResponse from a dict
list_report_configs_response_from_dict = ListReportConfigsResponse.from_dict(list_report_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


