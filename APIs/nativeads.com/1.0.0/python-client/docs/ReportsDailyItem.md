# ReportsDailyItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **str** |  | [optional] 
**cpc** | **str** |  | [optional] 
**ctr** | **str** |  | [optional] 
**var_date** | **str** |  | [optional] 
**earnings** | **str** |  | [optional] 
**impressions** | **str** |  | [optional] 
**net_ecpm** | **str** |  | [optional] 
**rpm** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.reports_daily_item import ReportsDailyItem

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsDailyItem from a JSON string
reports_daily_item_instance = ReportsDailyItem.from_json(json)
# print the JSON string representation of the object
print(ReportsDailyItem.to_json())

# convert the object into a dict
reports_daily_item_dict = reports_daily_item_instance.to_dict()
# create an instance of ReportsDailyItem from a dict
reports_daily_item_from_dict = ReportsDailyItem.from_dict(reports_daily_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


