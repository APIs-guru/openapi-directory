

# PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**benchmarkSharpeRatio** | **BigDecimal** | The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values |  |
|**confidenceLevel** | **BigDecimal** | The confidence level of the minimum track record length, in percentage |  [optional] |
|**portfolios** | [**List&lt;PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner&gt;**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  |  |
|**riskFreeRate** | **BigDecimal** | The risk free rate |  |
|**benchmarkValues** | **List&lt;BigDecimal&gt;** | benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays |  [optional] |



