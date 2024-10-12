# GasWeeklyRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_price_per_gal_regular_gasoline** | **str** | Average price at the pump for all gallons sold during the reporting week. | [optional] 
**country** | **str** | Country Code. | [optional] 
**padd_code** | **str** | PADD (Petroleum Administration for Defense Districts) are defined by the U.S. Energy Information Administration. The PADD Districts are New England, Central Atlantic, Lower Atlantic, Midwest, Gulf Coast, Rocky Mountain, West Coast. | [optional] 
**padd_millionsof_barrels_sold** | **str** | For the PADD being reported, the estimated number of barrels (42 U.S. gallons) of regular motor gasoline (includes all finished motor gasoline grades and formulations or blends . It does not contain diesel nor aviation fuel.) sold during the week. | [optional] 
**padd_percent_change_in_barrels_from_prior_week** | **str** | The percent change from one week ago in the PADDMillionsofBarrelsSold. | [optional] 
**padd_percent_changein_barrelsfrom52_weeks_ago** | **str** | The percent change from 52 weeks ago in the PADDMillionsofBarrelsSold. | [optional] 
**period** | **str** | Indicates the period covered by the data with possible values of - day, week, month, quarter, annual | [optional] 
**product_line** | **str** | Overall product line that the report belongs to, the only report for this resource is US Weekly Gasoline Demand Report. | [optional] 
**publication_coverage_period** | **str** | Publication Coverage Period indicates what period is to be covered.  For this report it will include the gasoline week ending date which will always be a Friday. | [optional] 
**report_type** | **str** | Report type name, today the only report supported is \&quot;monitor\&quot;. | [optional] 
**sector** | **str** | Gas | [optional] 
**segment** | **str** | Not used. | [optional] 
**sub_sector** | **str** | Not used. | [optional] 
**total_barrels_change_from_prior_week** | **str** | Change in TotalMillionsOfBarrelsSold from one week ago. | [optional] 
**total_millions_of_barrels4_week_average** | **str** | Average millions of barrels of gasoline sold per week during the prior 4 weeks. | [optional] 
**total_millions_of_barrels_daily_average** | **str** | Average millions of barrels of gasoline sold per day during the week being reported. | [optional] 
**total_millions_of_barrels_sold** | **str** | Estimated number of barrels (42 U.S. Gallons) of regular motor gasoline (includes all finished motor gasoline grades and formulations or blends . IT does not contain diesel nor aviation fuel). | [optional] 
**total_percent_change_in_barrels_from52_weeks_ago** | **str** | Percent change from 52 weeks ago in the TotalMillionsOfBarrelsSold. | [optional] 
**total_percent_change_in_barrels_from_prior_week** | **str** | Percent change from one week ago in the TotalMillionsOfBarrelsSold. | [optional] 
**total_percent_change_in_the4_week_average_from52_weeks_ago** | **str** | Percent change from 52 weeks ago in the TotalMillionsOfBarrels4WeekAverage. | [optional] 
**week_end_date** | **str** | End of week date. | [optional] 

## Example

```python
from openapi_client.models.gas_weekly_record import GasWeeklyRecord

# TODO update the JSON string below
json = "{}"
# create an instance of GasWeeklyRecord from a JSON string
gas_weekly_record_instance = GasWeeklyRecord.from_json(json)
# print the JSON string representation of the object
print(GasWeeklyRecord.to_json())

# convert the object into a dict
gas_weekly_record_dict = gas_weekly_record_instance.to_dict()
# create an instance of GasWeeklyRecord from a dict
gas_weekly_record_from_dict = GasWeeklyRecord.from_dict(gas_weekly_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


