package shared



type UpdateSystemModelsPackageReport struct {
    Categories []UpdateSystemModelsCategory `json:"Categories,omitempty"`
    PackageDescription *string `json:"PackageDescription,omitempty"`
    PackageID *string `json:"PackageID,omitempty"`
    
}

