

# PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**confidenceIntervalType** | [**ConfidenceIntervalTypeEnum**](#ConfidenceIntervalTypeEnum) | The type of confidence interval to build |  [optional] |
|**confidenceLevel** | **BigDecimal** | The confidence level of the confidence interval to build, in percentage |  [optional] |
|**portfolios** | [**List&lt;PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner&gt;**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  |  |
|**riskFreeRate** | **BigDecimal** | The risk free rate |  |



## Enum: ConfidenceIntervalTypeEnum

| Name | Value |
|---- | -----|
| TWO_SIDED | &quot;twoSided&quot; |
| LOWER_ONE_SIDED | &quot;lowerOneSided&quot; |
| UPPER_ONE_SIDED | &quot;upperOneSided&quot; |



