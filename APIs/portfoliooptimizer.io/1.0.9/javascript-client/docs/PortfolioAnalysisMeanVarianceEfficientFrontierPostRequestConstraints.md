# PortfolioOptimizer.PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetsGroups** | **[[Number]]** |  | [optional] 
**assetsGroupsMatrix** | **[[Number]]** | assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups | [optional] 
**maximumAssetsGroupsWeights** | **[Number]** | maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided | [optional] 
**maximumAssetsWeights** | **[Number]** | maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage | [optional] 
**maximumPortfolioExposure** | **Number** | The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure | [optional] [default to 1]
**minimumAssetsWeights** | **[Number]** | minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage | [optional] 
**minimumPortfolioExposure** | **Number** | The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure | [optional] [default to 1]


