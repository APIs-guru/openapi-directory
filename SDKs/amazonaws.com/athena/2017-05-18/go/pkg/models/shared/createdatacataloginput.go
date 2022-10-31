package shared



type CreateDataCatalogInput struct {
    Description *string `json:"Description,omitempty"`
    Name string `json:"Name"`
    Parameters map[string]string `json:"Parameters,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Type DataCatalogTypeEnum `json:"Type"`
    
}

