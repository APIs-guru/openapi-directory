package shared



type InferRxNormResponse struct {
    Entities []RxNormEntity `json:"Entities"`
    ModelVersion *string `json:"ModelVersion,omitempty"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    
}

