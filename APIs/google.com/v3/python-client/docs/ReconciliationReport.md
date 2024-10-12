# ReconciliationReport

Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating). | [optional] 
**file_name** | **str** | Required. Desired filename of the reconciliation report. | [optional] 
**name** | **str** | Resource name in the format &#x60;accounts/{account_id}/reconciliationReports/{datetime}~{filename}&#x60;. The value for &#x60;{datetime}&#x60; must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_report import ReconciliationReport

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationReport from a JSON string
reconciliation_report_instance = ReconciliationReport.from_json(json)
# print the JSON string representation of the object
print(ReconciliationReport.to_json())

# convert the object into a dict
reconciliation_report_dict = reconciliation_report_instance.to_dict()
# create an instance of ReconciliationReport from a dict
reconciliation_report_from_dict = ReconciliationReport.from_dict(reconciliation_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


