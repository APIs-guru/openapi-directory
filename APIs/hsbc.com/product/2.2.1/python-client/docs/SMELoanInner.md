# SMELoanInner

SMELoan means SME unsecured loan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers. | 
**name** | **str** | The name of the SME Loan product used for marketing purposes from a customer perspective. I.e. what the customer would recognise. | 
**other_segment** | **object** | Other segment code which is not available in the standard code set | [optional] 
**sme_loan_marketing_state** | [**List[SMELoanMarketingStateInner]**](SMELoanMarketingStateInner.md) | The marketing state (promotional or regular) of the SME Loan Product. | 
**segment** | **List[str]** | Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.  Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd  Follow us: Investopedia on Facebook  With respect to SME Loan products, they are segmented in relation to different markets that they wish to focus on. | 

## Example

```python
from openapi_client.models.sme_loan_inner import SMELoanInner

# TODO update the JSON string below
json = "{}"
# create an instance of SMELoanInner from a JSON string
sme_loan_inner_instance = SMELoanInner.from_json(json)
# print the JSON string representation of the object
print(SMELoanInner.to_json())

# convert the object into a dict
sme_loan_inner_dict = sme_loan_inner_instance.to_dict()
# create an instance of SMELoanInner from a dict
sme_loan_inner_from_dict = SMELoanInner.from_dict(sme_loan_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


