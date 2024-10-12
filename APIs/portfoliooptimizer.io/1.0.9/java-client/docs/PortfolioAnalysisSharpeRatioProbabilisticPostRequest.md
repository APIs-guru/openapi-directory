

# PortfolioAnalysisSharpeRatioProbabilisticPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**benchmarkSharpeRatio** | **BigDecimal** | The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values |  |
|**portfolios** | [**List&lt;PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner&gt;**](PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner.md) |  |  |
|**riskFreeRate** | **BigDecimal** | The risk free rate |  |
|**benchmarkValues** | **List&lt;BigDecimal&gt;** | benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays |  |



