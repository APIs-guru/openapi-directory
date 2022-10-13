package shared

type RepositoryCatalogData struct {
	AboutText            *string  `json:"aboutText"`
	Architectures        []string `json:"architectures"`
	Description          *string  `json:"description"`
	LogoURL              *string  `json:"logoUrl"`
	MarketplaceCertified *bool    `json:"marketplaceCertified"`
	OperatingSystems     []string `json:"operatingSystems"`
	UsageText            *string  `json:"usageText"`
}
