package shared

type DeleteUserDefinedFunctionRequest struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName string  `json:"DatabaseName"`
	FunctionName string  `json:"FunctionName"`
}
