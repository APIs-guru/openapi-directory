# PortfolioOptimizer.PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidenceIntervalType** | **String** | The type of confidence interval to build | [optional] [default to &#39;twoSided&#39;]
**confidenceLevel** | **Number** | The confidence level of the confidence interval to build, in percentage | [optional] [default to 0.95]
**portfolios** | [**[PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner]**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  | 
**riskFreeRate** | **Number** | The risk free rate | 



## Enum: ConfidenceIntervalTypeEnum


* `twoSided` (value: `"twoSided"`)

* `lowerOneSided` (value: `"lowerOneSided"`)

* `upperOneSided` (value: `"upperOneSided"`)




