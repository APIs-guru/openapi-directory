# PortfolioAnalysisDrawdownsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portfolios** | [**List[PortfolioAnalysisDrawdownsPostRequestPortfoliosInner]**](PortfolioAnalysisDrawdownsPostRequestPortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_drawdowns_post_request import PortfolioAnalysisDrawdownsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisDrawdownsPostRequest from a JSON string
portfolio_analysis_drawdowns_post_request_instance = PortfolioAnalysisDrawdownsPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisDrawdownsPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_drawdowns_post_request_dict = portfolio_analysis_drawdowns_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisDrawdownsPostRequest from a dict
portfolio_analysis_drawdowns_post_request_from_dict = PortfolioAnalysisDrawdownsPostRequest.from_dict(portfolio_analysis_drawdowns_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


