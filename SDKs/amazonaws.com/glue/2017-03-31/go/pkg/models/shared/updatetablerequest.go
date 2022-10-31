package shared



type UpdateTableRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    DatabaseName string `json:"DatabaseName"`
    SkipArchive *bool `json:"SkipArchive,omitempty"`
    TableInput TableInput `json:"TableInput"`
    
}

