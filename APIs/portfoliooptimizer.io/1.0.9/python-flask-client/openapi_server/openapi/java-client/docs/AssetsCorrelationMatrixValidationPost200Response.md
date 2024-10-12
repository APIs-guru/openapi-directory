

# AssetsCorrelationMatrixValidationPost200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**message** | [**MessageEnum**](#MessageEnum) | Indicates whether the matrix is a valid correlation matrix |  |



## Enum: MessageEnum

| Name | Value |
|---- | -----|
| VALID_CORRELATION_MATRIX | &quot;valid correlation matrix&quot; |
| INVALID_CORRELATION_MATRIX_NON_SYMMETRIC_MATRIX | &quot;invalid correlation matrix - non symmetric matrix&quot; |
| INVALID_CORRELATION_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS | &quot;invalid correlation matrix - non positive diagonal elements&quot; |
| INVALID_CORRELATION_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX | &quot;invalid correlation matrix - non positive semi-definite matrix&quot; |



