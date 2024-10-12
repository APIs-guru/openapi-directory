# PortfolioOptimizer.PortfolioConstructionInvestablePostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** | The number of assets | 
**assetsGroups** | **[[Number]]** |  | [optional] 
**assetsGroupsWeights** | **[Number]** | assetsGroupsWeights[i] is the desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present | [optional] 
**assetsMinimumNotionalValues** | **[Number]** | assetsMinimumNotionalValues[i] is the minimum monetary value that the position in the asset i is required to represent when the asset i is included in the portfolio | [optional] 
**assetsMinimumPositions** | **[Number]** | assetsMinimumPositions[i] is the minimum number of shares of the asset i that is required to purchase when the asset i is included in the portfolio (usual values are the same as for assetsSizeLots) | [optional] 
**assetsPrices** | **[Number]** | assetsPrices[i] is the price of the asset i | 
**assetsSizeLots** | **[Number]** | assetsSizeLots[i] is the number of shares by which it is required to purchase the asset i (usual values are 1 if the asset needs to be purchased share by share, 100 if the asset needs to be purchased by an integer multiple of 100 shares, and 1/1000000 - e.g. for Robinhood broker - if the asset can be purchased by fractional shares) | [optional] 
**assetsWeights** | **[Number]** | assetsWeights[i] is the desired weight of the asset i in the portfolio, in percentage (can be null to indicate no specific desire) | [optional] 
**maximumAssetsGroupsWeights** | **[Number]** | maximumAssetsGroupsWeights[k] is the maximum desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present | [optional] 
**portfolioValue** | **Number** | The monetary value of the portfolio | 


