# PortfolioOptimizer.AssetsReturnsTurbulencePartitionedPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**[AssetsCorrelationMatrixPostRequestOneOfAssetsInner]**](AssetsCorrelationMatrixPostRequestOneOfAssetsInner.md) |  | 
**turbulenceThresholds** | **[Number]** | The turbulence threshold(s), in percentage; in case several turbulence thresholds are provided, they must be provided in increasing order | 
**turbulenceThresholdsConversionMethod** | **String** | The method to use to convert the turbulence threshold(s) into turbulence score(s) | [optional] [default to &#39;chisquareInverseDistribution&#39;]



## Enum: TurbulenceThresholdsConversionMethodEnum


* `empiricalQuantileDistribution` (value: `"empiricalQuantileDistribution"`)

* `chisquareInverseDistribution` (value: `"chisquareInverseDistribution"`)




