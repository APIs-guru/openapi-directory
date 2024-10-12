

# AssetsCovarianceMatrixValidationPost200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**message** | [**MessageEnum**](#MessageEnum) | Indicates whether the matrix is a valid covariance matrix |  |



## Enum: MessageEnum

| Name | Value |
|---- | -----|
| VALID_COVARIANCE_MATRIX | &quot;valid covariance matrix&quot; |
| INVALID_COVARIANCE_MATRIX_NON_SYMMETRIC_MATRIX | &quot;invalid covariance matrix - non symmetric matrix&quot; |
| INVALID_COVARIANCE_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS | &quot;invalid covariance matrix - non positive diagonal elements&quot; |
| INVALID_COVARIANCE_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX | &quot;invalid covariance matrix - non positive semi-definite matrix&quot; |



