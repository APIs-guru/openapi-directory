

# AssetsReturnsTurbulencePartitionedPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | [**List&lt;AssetsCorrelationMatrixPostRequestOneOfAssetsInner&gt;**](AssetsCorrelationMatrixPostRequestOneOfAssetsInner.md) |  |  |
|**turbulenceThresholds** | **List&lt;BigDecimal&gt;** | The turbulence threshold(s), in percentage; in case several turbulence thresholds are provided, they must be provided in increasing order |  |
|**turbulenceThresholdsConversionMethod** | [**TurbulenceThresholdsConversionMethodEnum**](#TurbulenceThresholdsConversionMethodEnum) | The method to use to convert the turbulence threshold(s) into turbulence score(s) |  [optional] |



## Enum: TurbulenceThresholdsConversionMethodEnum

| Name | Value |
|---- | -----|
| EMPIRICAL_QUANTILE_DISTRIBUTION | &quot;empiricalQuantileDistribution&quot; |
| CHISQUARE_INVERSE_DISTRIBUTION | &quot;chisquareInverseDistribution&quot; |



