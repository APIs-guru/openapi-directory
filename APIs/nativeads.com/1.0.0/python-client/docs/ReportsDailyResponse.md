# ReportsDailyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ReportsDailyItem]**](ReportsDailyItem.md) |  | [optional] 
**success** | **bool** |  | [optional] 
**total_count** | **int** |  | [optional] 
**totals** | [**Totals**](Totals.md) |  | [optional] 

## Example

```python
from openapi_client.models.reports_daily_response import ReportsDailyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsDailyResponse from a JSON string
reports_daily_response_instance = ReportsDailyResponse.from_json(json)
# print the JSON string representation of the object
print(ReportsDailyResponse.to_json())

# convert the object into a dict
reports_daily_response_dict = reports_daily_response_instance.to_dict()
# create an instance of ReportsDailyResponse from a dict
reports_daily_response_from_dict = ReportsDailyResponse.from_dict(reports_daily_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


