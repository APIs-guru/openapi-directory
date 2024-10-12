

# PortfolioAnalysisAlphaPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**benchmarkReturns** | **List&lt;BigDecimal&gt;** | benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays |  |
|**portfolios** | [**List&lt;PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner&gt;**](PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner.md) |  |  |
|**riskFreeRate** | **BigDecimal** | The risk free rate, assumed to be constant for any time t |  [optional] |
|**riskFreeReturns** | **List&lt;BigDecimal&gt;** | riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays |  [optional] |



