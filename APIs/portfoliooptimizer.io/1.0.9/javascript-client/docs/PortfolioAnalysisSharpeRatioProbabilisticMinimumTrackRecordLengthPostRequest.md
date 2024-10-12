# PortfolioOptimizer.PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmarkSharpeRatio** | **Number** | The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values | 
**confidenceLevel** | **Number** | The confidence level of the minimum track record length, in percentage | [optional] [default to 0.95]
**portfolios** | [**[PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner]**](PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner.md) |  | 
**riskFreeRate** | **Number** | The risk free rate | 
**benchmarkValues** | **[Number]** | benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays | [optional] 


