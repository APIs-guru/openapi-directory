# PortfolioOptimizer.AssetsReturnsSimulationBootstrapPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**[AssetsReturnsSimulationBootstrapPostRequestAssetsInner]**](AssetsReturnsSimulationBootstrapPostRequestAssetsInner.md) |  | 
**bootstrapAverageBlockLength** | **Number** | The average length of the blocks to use in case the bootstrap method is &#39;stationaryBlock&#39;, in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3 | [optional] 
**bootstrapBlockLength** | **Number** | The length of the blocks to use in case the bootstrap method is &#39;circularBlock&#39;, in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3] | [optional] 
**bootstrapMethod** | **String** | The bootstrap method to use | [optional] [default to &#39;stationaryBlock&#39;]
**simulations** | **Number** | The number of simulations to perform | [optional] [default to 1]
**simulationsLength** | **Number** | The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays | [optional] 



## Enum: BootstrapMethodEnum


* `iid` (value: `"iid"`)

* `circularBlock` (value: `"circularBlock"`)

* `stationaryBlock` (value: `"stationaryBlock"`)




