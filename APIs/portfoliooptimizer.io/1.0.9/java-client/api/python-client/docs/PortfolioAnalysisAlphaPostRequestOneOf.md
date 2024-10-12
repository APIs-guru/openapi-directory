# PortfolioAnalysisAlphaPostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_returns** | **List[float]** | benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays | 
**portfolios** | [**List[PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner]**](PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.md) |  | 
**risk_free_rate** | **float** | The risk free rate, assumed to be constant for any time t | [optional] 

## Example

```python
from openapi_client.models.portfolio_analysis_alpha_post_request_one_of import PortfolioAnalysisAlphaPostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisAlphaPostRequestOneOf from a JSON string
portfolio_analysis_alpha_post_request_one_of_instance = PortfolioAnalysisAlphaPostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisAlphaPostRequestOneOf.to_json())

# convert the object into a dict
portfolio_analysis_alpha_post_request_one_of_dict = portfolio_analysis_alpha_post_request_one_of_instance.to_dict()
# create an instance of PortfolioAnalysisAlphaPostRequestOneOf from a dict
portfolio_analysis_alpha_post_request_one_of_from_dict = PortfolioAnalysisAlphaPostRequestOneOf.from_dict(portfolio_analysis_alpha_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


