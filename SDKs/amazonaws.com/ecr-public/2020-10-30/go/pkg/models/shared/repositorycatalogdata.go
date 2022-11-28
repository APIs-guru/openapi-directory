package shared

// RepositoryCatalogData
// The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
type RepositoryCatalogData struct {
	AboutText            *string  `json:"aboutText,omitempty"`
	Architectures        []string `json:"architectures,omitempty"`
	Description          *string  `json:"description,omitempty"`
	LogoURL              *string  `json:"logoUrl,omitempty"`
	MarketplaceCertified *bool    `json:"marketplaceCertified,omitempty"`
	OperatingSystems     []string `json:"operatingSystems,omitempty"`
	UsageText            *string  `json:"usageText,omitempty"`
}
