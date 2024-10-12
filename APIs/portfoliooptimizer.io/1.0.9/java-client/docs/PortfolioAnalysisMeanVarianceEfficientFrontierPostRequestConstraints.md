

# PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assetsGroups** | **List&lt;Set&lt;Integer&gt;&gt;** |  |  [optional] |
|**assetsGroupsMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups |  [optional] |
|**maximumAssetsGroupsWeights** | **List&lt;BigDecimal&gt;** | maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided |  [optional] |
|**maximumAssetsWeights** | **List&lt;BigDecimal&gt;** | maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage |  [optional] |
|**maximumPortfolioExposure** | **BigDecimal** | The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure |  [optional] |
|**minimumAssetsWeights** | **List&lt;BigDecimal&gt;** | minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage |  [optional] |
|**minimumPortfolioExposure** | **BigDecimal** | The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure |  [optional] |



