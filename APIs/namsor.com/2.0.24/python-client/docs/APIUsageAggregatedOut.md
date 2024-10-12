# APIUsageAggregatedOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**col_headers** | **List[str]** | apiServices as column headers  | [optional] 
**data** | **List[List[int]]** | Data points : usage per DAY, WEEK or MONTH and per apiService | [optional] 
**history_truncated** | **bool** | If the history was truncaded due to data limit | [optional] 
**period_end** | **int** | End datetime of the reporting period | [optional] 
**period_start** | **int** | Start datetime of the reporting period | [optional] 
**row_headers** | **List[str]** | dates as row headers  | [optional] 
**time_unit** | **str** | Time unit is DAY, WEEK or MONTH depending on prior usage | [optional] 
**total_usage** | **int** | Total usage in the current period | [optional] 

## Example

```python
from openapi_client.models.api_usage_aggregated_out import APIUsageAggregatedOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIUsageAggregatedOut from a JSON string
api_usage_aggregated_out_instance = APIUsageAggregatedOut.from_json(json)
# print the JSON string representation of the object
print(APIUsageAggregatedOut.to_json())

# convert the object into a dict
api_usage_aggregated_out_dict = api_usage_aggregated_out_instance.to_dict()
# create an instance of APIUsageAggregatedOut from a dict
api_usage_aggregated_out_from_dict = APIUsageAggregatedOut.from_dict(api_usage_aggregated_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


