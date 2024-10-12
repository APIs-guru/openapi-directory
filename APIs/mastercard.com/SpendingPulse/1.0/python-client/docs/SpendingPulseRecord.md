# SpendingPulseRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country Code. | [optional] 
**currency_of_for_sales_value** | **str** | A value to indicate the currency in which the sales value is being reported. For sales index values, this field is not used. | [optional] 
**ecomm** | **str** | Ecommerce indicator. \&quot;yes\&quot; or \&quot;no\&quot; are the options. | [optional] 
**implied_deflator_month_over_month_change** | **str** | Percent change from one month ago in the implied deflator (the deflator is used in seasonal adjustment calculation). | [optional] 
**implied_deflator_year_over_year_change** | **str** | Percent change from one year ago in the implied deflator (the deflator is used in seasonal adjustment calculation). | [optional] 
**non_gregorian_reporting_period** | **str** | For only those data reported by a non-Gregorian calendar (e.g. US Sectors which are reported based on the National Retail Federation 4-5-4 calendar) this value designates the retail period being reported. As an example, for the US apparel sector, for Period Date &#x3D; February 2015, the reporting period is 2015-01 (February is the first month of US retail year 2015). | [optional] 
**period** | **str** | Indicates the period covered by the data with possible values of - day, week, month, quarter, annual | [optional] 
**period_end_date** | **str** | Date indicating the end of the period covered by ensuing data. | [optional] 
**period_start_date** | **str** | Date indicating the beginning of the period covered by ensuing data. | [optional] 
**price_adjustment_flag** | **str** | Price adjustment indicator. | [optional] 
**price_index3_month_moving_average_change** | **str** | Percent change from one year ago in the three-month moving PriceIndexValue average. | [optional] 
**price_index_month_over_month_change** | **str** | Percent change from one month ago in the PriceIndexValue. | [optional] 
**price_index_value** | **str** | Published price index value for the period being reported. Not a currency value - a decimal index value. The price index takes into account both the average ticket value and the size of the basket. Changes in either will be reflected in the price index changes. | [optional] 
**price_index_year_over_year_change** | **str** | Percent change from one year ago in the PriceIndexValue. | [optional] 
**product_line** | **str** | Product line, either for this resource it will be ?US Executive\&quot;. | [optional] 
**publication_coverage_period** | **str** | Publication Coverage Period indicates what period is to be covered, often the current report will include the month prior. | [optional] 
**report_type** | **str** | Report type name, today the only report supported is \&quot;monitor\&quot;. | [optional] 
**reporting_calender** | **str** | Value indicates calendar used for periodic aggregation (e.g. \&quot;G\&quot; &#x3D; Gregorian, \&quot;454\&quot; &#x3D; US Retail, \&quot;445\&quot; &#x3D; UK ONS, etc.) Please note that some data are reported under more than one calendar. As a result, in order to uniquely identify the data being reported, the reporting calendar must be included. | [optional] 
**sales3_month_moving_average_change** | **str** | Percent change from one year ago in the three-month moving SalesIndexValue average. | [optional] 
**sales_month_over_month_change** | **str** | Percent change from one month ago in the SalesValueIndex. | [optional] 
**sales_value_index** | **str** | Aggregated/computed value of sales for the period being reported. This may be an index value (not a currency value - just a decimal value) or it may be a currency value that would typically be in local currency (dollar, pound, yen, etc.) | [optional] 
**sales_year_over_year_change** | **str** | Percent change from one year ago in the SalesValueIndex. | [optional] 
**sales_year_to_date_change** | **str** | Percent change from year ago. | [optional] 
**same_store_sales_index3_month_moving_average_change** | **str** | Percent change from one month ago in the SameStoreSalesIndex. | [optional] 
**same_store_sales_index_year_over_year_change** | **str** | Percent change from one year ago in the SameStoreSalesIndex. | [optional] 
**seasonal_adjustment_flag** | **str** | Seasonal data adjustment indicator. | [optional] 
**sector** | **str** | Sector name/id. | [optional] 
**segment** | **str** | Sub unit within a sector e.g. Sector &#x3D; restaurant; SubSector &#x3D; Full Service; Segment &#x3D; Fine Dining. | [optional] 
**sub_geography_value** | **str** | For those data reported by sub-geographies (e.g. regions, states, etc.) the sub-geography being reported. | [optional] 
**sub_sector** | **str** | Sub unit within a sector e.g. Sector &#x3D; Electronics &amp; Appliances; SubSector &#x3D; Electronics. | [optional] 
**transaction_index3_month_moving_average_change** | **str** | Percent change from one year ago in the three-month moving TransactionIndexValue average. | [optional] 
**transaction_index_month_over_month_change** | **str** | Percent change from one month ago in the TransactionIndexValue. | [optional] 
**transaction_index_value** | **str** | Published transaction index value for the period being reported. Not a currency value - a decimal index value. The transaction index is a relative indication of transactions volume in the sector/sub-sector/segment being reported. | [optional] 
**transaction_index_year_over_year_change** | **str** | Percent change from one year ago in the TransactionIndexValue. | [optional] 

## Example

```python
from openapi_client.models.spending_pulse_record import SpendingPulseRecord

# TODO update the JSON string below
json = "{}"
# create an instance of SpendingPulseRecord from a JSON string
spending_pulse_record_instance = SpendingPulseRecord.from_json(json)
# print the JSON string representation of the object
print(SpendingPulseRecord.to_json())

# convert the object into a dict
spending_pulse_record_dict = spending_pulse_record_instance.to_dict()
# create an instance of SpendingPulseRecord from a dict
spending_pulse_record_from_dict = SpendingPulseRecord.from_dict(spending_pulse_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


