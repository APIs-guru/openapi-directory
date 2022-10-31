package shared



type DetectEntitiesResponse struct {
    Entities []Entity `json:"Entities"`
    ModelVersion string `json:"ModelVersion"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    UnmappedAttributes []UnmappedAttribute `json:"UnmappedAttributes,omitempty"`
    
}

