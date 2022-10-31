package shared



type GetUserDefinedFunctionRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    FunctionName string `json:"FunctionName"`
    
}

