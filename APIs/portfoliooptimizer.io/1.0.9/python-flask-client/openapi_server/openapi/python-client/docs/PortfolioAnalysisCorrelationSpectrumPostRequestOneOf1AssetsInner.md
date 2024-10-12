# PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_prices** | **List[float]** | assetPrices[t] is the price of the asset at the time t; all the assetPrices arrays must have the same length | 

## Example

```python
from openapi_client.models.portfolio_analysis_correlation_spectrum_post_request_one_of1_assets_inner import PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner from a JSON string
portfolio_analysis_correlation_spectrum_post_request_one_of1_assets_inner_instance = PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner.from_json(json)
# print the JSON string representation of the object
print(PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner.to_json())

# convert the object into a dict
portfolio_analysis_correlation_spectrum_post_request_one_of1_assets_inner_dict = portfolio_analysis_correlation_spectrum_post_request_one_of1_assets_inner_instance.to_dict()
# create an instance of PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner from a dict
portfolio_analysis_correlation_spectrum_post_request_one_of1_assets_inner_from_dict = PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner.from_dict(portfolio_analysis_correlation_spectrum_post_request_one_of1_assets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


