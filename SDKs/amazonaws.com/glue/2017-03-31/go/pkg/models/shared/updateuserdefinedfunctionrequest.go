package shared

type UpdateUserDefinedFunctionRequest struct {
	CatalogID     *string                  `json:"CatalogId"`
	DatabaseName  string                   `json:"DatabaseName"`
	FunctionInput UserDefinedFunctionInput `json:"FunctionInput"`
	FunctionName  string                   `json:"FunctionName"`
}
