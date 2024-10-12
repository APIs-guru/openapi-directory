# PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_level** | **float** | The confidence level | [optional] [default to 0.95]
**portfolios** | [**List[PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner]**](PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest from a JSON string
portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request_instance = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request_dict = portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest from a dict
portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request_from_dict = PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest.from_dict(portfolio_analysis_value_at_risk_conditional_cornish_fisher_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


