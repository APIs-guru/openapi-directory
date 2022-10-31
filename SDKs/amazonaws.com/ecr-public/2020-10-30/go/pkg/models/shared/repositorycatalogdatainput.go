package shared



type RepositoryCatalogDataInput struct {
    AboutText *string `json:"aboutText,omitempty"`
    Architectures []string `json:"architectures,omitempty"`
    Description *string `json:"description,omitempty"`
    LogoImageBlob *string `json:"logoImageBlob,omitempty"`
    OperatingSystems []string `json:"operatingSystems,omitempty"`
    UsageText *string `json:"usageText,omitempty"`
    
}

