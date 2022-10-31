package shared



type InferIcd10CmResponse struct {
    Entities []Icd10CmEntity `json:"Entities"`
    ModelVersion *string `json:"ModelVersion,omitempty"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    
}

