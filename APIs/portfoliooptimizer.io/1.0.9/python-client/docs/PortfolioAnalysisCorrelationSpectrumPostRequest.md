# PortfolioAnalysisCorrelationSpectrumPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner]**](PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner.md) |  | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**portfolios** | [**List[PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner]**](PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner.md) |  | 

## Example

```python
from openapi_client.models.portfolio_analysis_correlation_spectrum_post_request import PortfolioAnalysisCorrelationSpectrumPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisCorrelationSpectrumPostRequest from a JSON string
portfolio_analysis_correlation_spectrum_post_request_instance = PortfolioAnalysisCorrelationSpectrumPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisCorrelationSpectrumPostRequest.to_json())

# convert the object into a dict
portfolio_analysis_correlation_spectrum_post_request_dict = portfolio_analysis_correlation_spectrum_post_request_instance.to_dict()
# create an instance of PortfolioAnalysisCorrelationSpectrumPostRequest from a dict
portfolio_analysis_correlation_spectrum_post_request_from_dict = PortfolioAnalysisCorrelationSpectrumPostRequest.from_dict(portfolio_analysis_correlation_spectrum_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


