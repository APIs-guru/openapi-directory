package shared

type GetUserDefinedFunctionRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName string  `json:"DatabaseName"`
	FunctionName string  `json:"FunctionName"`
}
