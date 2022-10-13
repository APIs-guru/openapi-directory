package shared

type DeleteUserDefinedFunctionRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName string  `json:"DatabaseName"`
	FunctionName string  `json:"FunctionName"`
}
