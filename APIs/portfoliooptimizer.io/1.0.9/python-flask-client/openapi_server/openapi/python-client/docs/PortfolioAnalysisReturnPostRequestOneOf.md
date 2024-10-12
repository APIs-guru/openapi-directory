# PortfolioAnalysisReturnPostRequestOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_returns** | **List[float]** | assetsReturns[i] is the arithmetic return of asset i | 
**portfolios** | [**List[PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner]**](PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_return_post_request_one_of import PortfolioAnalysisReturnPostRequestOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisReturnPostRequestOneOf from a JSON string
portfolio_analysis_return_post_request_one_of_instance = PortfolioAnalysisReturnPostRequestOneOf.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisReturnPostRequestOneOf.to_json())

# convert the object into a dict
portfolio_analysis_return_post_request_one_of_dict = portfolio_analysis_return_post_request_one_of_instance.to_dict()
# create an instance of PortfolioAnalysisReturnPostRequestOneOf from a dict
portfolio_analysis_return_post_request_one_of_from_dict = PortfolioAnalysisReturnPostRequestOneOf.from_dict(portfolio_analysis_return_post_request_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


