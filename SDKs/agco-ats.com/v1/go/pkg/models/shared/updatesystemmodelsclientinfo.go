package shared



type UpdateSystemModelsClientInfo struct {
    ClientID *string `json:"ClientID,omitempty"`
    Package []UpdateSystemModelsPackageReport `json:"Package,omitempty"`
    
}

