# PortfolioOptimizer.AssetsCorrelationMatrixShrinkagePostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** |  | 
**assetsCorrelationMatrix** | **[[Number]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**shrinkageFactor** | **Number** |  | 
**targetEquicorrelationMatrix** | **String** | The shrinkage target correlation matrix | 
**targetCorrelationMatrix** | **[[Number]]** | targetCorrelationMatrix[i][j] is the target correlation between the asset i and the asset j | 



## Enum: TargetEquicorrelationMatrixEnum


* `minimumEquicorrelationMatrix` (value: `"minimumEquicorrelationMatrix"`)

* `zeroEquicorrelationMatrix` (value: `"zeroEquicorrelationMatrix"`)

* `maximumEquicorrelationMatrix` (value: `"maximumEquicorrelationMatrix"`)




