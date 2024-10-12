# PortfolioConstructionMimickingPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsCorrelationMatrixPostRequestOneOfAssetsInner]**](AssetsCorrelationMatrixPostRequestOneOfAssetsInner.md) |  | 
**benchmark_returns** | **List[float]** | benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the assetReturns arrays | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_construction_mimicking_post_request import PortfolioConstructionMimickingPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioConstructionMimickingPostRequest from a JSON string
portfolio_construction_mimicking_post_request_instance = PortfolioConstructionMimickingPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioConstructionMimickingPostRequest.to_json())

# convert the object into a dict
portfolio_construction_mimicking_post_request_dict = portfolio_construction_mimicking_post_request_instance.to_dict()
# create an instance of PortfolioConstructionMimickingPostRequest from a dict
portfolio_construction_mimicking_post_request_from_dict = PortfolioConstructionMimickingPostRequest.from_dict(portfolio_construction_mimicking_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


