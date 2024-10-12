# SummaryReportResponse

This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see <a href=\"/api-docs/sell/static/marketing/pm-summary-reports.html\">Reading item promotion Summary reports</a>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_sale** | [**Amount**](Amount.md) |  | [optional] 
**last_updated** | **str** | The date the report was generated. | [optional] 
**percentage_sales_lift** | **str** | The percentage of the total dollar amount gained due to promotions. This value is calculated as follows:  &lt;br&gt;&lt;br&gt;&lt;b&gt;precentageSalesLift&lt;/b&gt; &#x3D; &lt;b&gt;promotionSale&lt;/b&gt; / (&lt;b&gt;baseSale&lt;/b&gt; + &lt;b&gt;promotionSale&lt;/b&gt;) | [optional] 
**promotion_sale** | [**Amount**](Amount.md) |  | [optional] 
**total_sale** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.summary_report_response import SummaryReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryReportResponse from a JSON string
summary_report_response_instance = SummaryReportResponse.from_json(json)
# print the JSON string representation of the object
print(SummaryReportResponse.to_json())

# convert the object into a dict
summary_report_response_dict = summary_report_response_instance.to_dict()
# create an instance of SummaryReportResponse from a dict
summary_report_response_from_dict = SummaryReportResponse.from_dict(summary_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


