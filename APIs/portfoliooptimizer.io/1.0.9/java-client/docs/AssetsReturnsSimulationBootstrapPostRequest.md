

# AssetsReturnsSimulationBootstrapPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | [**List&lt;AssetsReturnsSimulationBootstrapPostRequestAssetsInner&gt;**](AssetsReturnsSimulationBootstrapPostRequestAssetsInner.md) |  |  |
|**bootstrapAverageBlockLength** | **BigDecimal** | The average length of the blocks to use in case the bootstrap method is &#39;stationaryBlock&#39;, in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3 |  [optional] |
|**bootstrapBlockLength** | **Integer** | The length of the blocks to use in case the bootstrap method is &#39;circularBlock&#39;, in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3] |  [optional] |
|**bootstrapMethod** | [**BootstrapMethodEnum**](#BootstrapMethodEnum) | The bootstrap method to use |  [optional] |
|**simulations** | **Integer** | The number of simulations to perform |  [optional] |
|**simulationsLength** | **Integer** | The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays |  [optional] |



## Enum: BootstrapMethodEnum

| Name | Value |
|---- | -----|
| IID | &quot;iid&quot; |
| CIRCULAR_BLOCK | &quot;circularBlock&quot; |
| STATIONARY_BLOCK | &quot;stationaryBlock&quot; |



