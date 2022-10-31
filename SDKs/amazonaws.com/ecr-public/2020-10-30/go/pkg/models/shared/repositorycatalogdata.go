package shared



type RepositoryCatalogData struct {
    AboutText *string `json:"aboutText,omitempty"`
    Architectures []string `json:"architectures,omitempty"`
    Description *string `json:"description,omitempty"`
    LogoURL *string `json:"logoUrl,omitempty"`
    MarketplaceCertified *bool `json:"marketplaceCertified,omitempty"`
    OperatingSystems []string `json:"operatingSystems,omitempty"`
    UsageText *string `json:"usageText,omitempty"`
    
}

