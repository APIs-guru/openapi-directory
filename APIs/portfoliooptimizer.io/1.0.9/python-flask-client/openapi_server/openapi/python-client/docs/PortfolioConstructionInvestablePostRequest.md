# PortfolioConstructionInvestablePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_groups** | **List[List[int]]** |  | [optional] 
**assets_groups_weights** | **List[float]** | assetsGroupsWeights[i] is the desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present | [optional] 
**assets_minimum_notional_values** | **List[float]** | assetsMinimumNotionalValues[i] is the minimum monetary value that the position in the asset i is required to represent when the asset i is included in the portfolio | [optional] 
**assets_minimum_positions** | **List[float]** | assetsMinimumPositions[i] is the minimum number of shares of the asset i that is required to purchase when the asset i is included in the portfolio (usual values are the same as for assetsSizeLots) | [optional] 
**assets_prices** | **List[float]** | assetsPrices[i] is the price of the asset i | 
**assets_size_lots** | **List[float]** | assetsSizeLots[i] is the number of shares by which it is required to purchase the asset i (usual values are 1 if the asset needs to be purchased share by share, 100 if the asset needs to be purchased by an integer multiple of 100 shares, and 1/1000000 - e.g. for Robinhood broker - if the asset can be purchased by fractional shares) | [optional] 
**assets_weights** | **List[float]** | assetsWeights[i] is the desired weight of the asset i in the portfolio, in percentage (can be null to indicate no specific desire) | [optional] 
**maximum_assets_groups_weights** | **List[float]** | maximumAssetsGroupsWeights[k] is the maximum desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present | [optional] 
**portfolio_value** | **float** | The monetary value of the portfolio | 

## Example

```python
from openapi_client.models.portfolio_construction_investable_post_request import PortfolioConstructionInvestablePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioConstructionInvestablePostRequest from a JSON string
portfolio_construction_investable_post_request_instance = PortfolioConstructionInvestablePostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioConstructionInvestablePostRequest.to_json())

# convert the object into a dict
portfolio_construction_investable_post_request_dict = portfolio_construction_investable_post_request_instance.to_dict()
# create an instance of PortfolioConstructionInvestablePostRequest from a dict
portfolio_construction_investable_post_request_from_dict = PortfolioConstructionInvestablePostRequest.from_dict(portfolio_construction_investable_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


