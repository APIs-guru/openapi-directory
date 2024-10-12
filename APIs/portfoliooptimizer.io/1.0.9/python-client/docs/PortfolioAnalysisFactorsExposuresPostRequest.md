# PortfolioAnalysisFactorsExposuresPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factors** | [**List[PortfolioAnalysisFactorsExposuresPostRequestFactorsInner]**](PortfolioAnalysisFactorsExposuresPostRequestFactorsInner.md) |  | [optional] 
**portfolios** | [**List[PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner]**](PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_factors_exposures_post_request import PortfolioAnalysisFactorsExposuresPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisFactorsExposuresPostRequest from a JSON string
portfolio_analysis_factors_exposures_post_request_instance = PortfolioAnalysisFactorsExposuresPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisFactorsExposuresPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_factors_exposures_post_request_dict = portfolio_analysis_factors_exposures_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisFactorsExposuresPostRequest from a dict
portfolio_analysis_factors_exposures_post_request_from_dict = PortfolioAnalysisFactorsExposuresPostRequest.from_dict(portfolio_analysis_factors_exposures_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


