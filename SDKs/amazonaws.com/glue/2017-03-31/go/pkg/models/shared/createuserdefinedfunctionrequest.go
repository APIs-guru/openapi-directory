package shared

type CreateUserDefinedFunctionRequest struct {
	CatalogID     *string                  `json:"CatalogId,omitempty"`
	DatabaseName  string                   `json:"DatabaseName"`
	FunctionInput UserDefinedFunctionInput `json:"FunctionInput"`
}
