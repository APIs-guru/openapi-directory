package shared

type CreateUserDefinedFunctionRequest struct {
	CatalogID     *string                  `json:"CatalogId"`
	DatabaseName  string                   `json:"DatabaseName"`
	FunctionInput UserDefinedFunctionInput `json:"FunctionInput"`
}
