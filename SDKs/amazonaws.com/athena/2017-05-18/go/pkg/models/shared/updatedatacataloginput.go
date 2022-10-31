package shared



type UpdateDataCatalogInput struct {
    Description *string `json:"Description,omitempty"`
    Name string `json:"Name"`
    Parameters map[string]string `json:"Parameters,omitempty"`
    Type DataCatalogTypeEnum `json:"Type"`
    
}

