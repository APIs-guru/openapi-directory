package shared

type RepositoryCatalogDataInput struct {
	AboutText        *string  `json:"aboutText"`
	Architectures    []string `json:"architectures"`
	Description      *string  `json:"description"`
	LogoImageBlob    *string  `json:"logoImageBlob"`
	OperatingSystems []string `json:"operatingSystems"`
	UsageText        *string  `json:"usageText"`
}
