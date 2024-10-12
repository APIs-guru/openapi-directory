# GetDailyReportTotals200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **int** |  | [optional] 
**confirmed** | **int** |  | [optional] 
**critical** | **int** |  | [optional] 
**var_date** | **str** |  | [optional] 
**deaths** | **int** |  | [optional] 
**recovered** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_daily_report_totals200_response_inner import GetDailyReportTotals200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetDailyReportTotals200ResponseInner from a JSON string
get_daily_report_totals200_response_inner_instance = GetDailyReportTotals200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetDailyReportTotals200ResponseInner.to_json())

# convert the object into a dict
get_daily_report_totals200_response_inner_dict = get_daily_report_totals200_response_inner_instance.to_dict()
# create an instance of GetDailyReportTotals200ResponseInner from a dict
get_daily_report_totals200_response_inner_from_dict = GetDailyReportTotals200ResponseInner.from_dict(get_daily_report_totals200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


