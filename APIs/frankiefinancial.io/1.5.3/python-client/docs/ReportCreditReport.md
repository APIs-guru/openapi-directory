# ReportCreditReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**court_judgements** | [**List[CourtJudgement]**](CourtJudgement.md) | CreditorWatch aggregate data from courts around Australia to provide a summary of court actions against an entity. When available, details of the action include location, case number, state, plaintiff, nature of the claim, action type and dollar amount. | [optional] 
**credit_enquiries** | **int** | Credit enquiries provide an indication of the number of times an entity&#39;s credit file has been accessed. | [optional] 
**insolvency_notices** | [**List[InsolvencyNotice]**](InsolvencyNotice.md) | Insolvency and other published notices are provided by ASIC. These published notices provide details on external administrations, winding up applications (voluntary or by a court) and proposed company deregistrations, amongst other things. The notices contain important contact details and dates for creditors. These notices are provided directly from the ASIC insolvency notices website. If you require further information, visit:     https://insolvencynotices.asic.gov.au. | [optional] 
**loans** | [**List[Loan]**](Loan.md) |  | [optional] 
**mercantile_enquiries** | [**List[MercantileEnquiry]**](MercantileEnquiry.md) | A Mercantile enquiry is an indication that a mercantile agency (or debt collection agency) has conducted an enquiry on this entity for the purpose of debt collection. | [optional] 
**payment_defaults** | [**List[PaymentDefault]**](PaymentDefault.md) | A default indicates that the debtor has failed to make a payment for goods or services. Payment Defaults are unique to CreditorWatch and  can have one of three statuses:    - outstanding   - partial payment   - settled.  | [optional] 

## Example

```python
from openapi_client.models.report_credit_report import ReportCreditReport

# TODO update the JSON string below
json = "{}"
# create an instance of ReportCreditReport from a JSON string
report_credit_report_instance = ReportCreditReport.from_json(json)
# print the JSON string representation of the object
print(ReportCreditReport.to_json())

# convert the object into a dict
report_credit_report_dict = report_credit_report_instance.to_dict()
# create an instance of ReportCreditReport from a dict
report_credit_report_from_dict = ReportCreditReport.from_dict(report_credit_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


