package shared

type UpdateSystemModelsClientInfo struct {
	ClientID *string                           `json:"ClientID"`
	Package  []UpdateSystemModelsPackageReport `json:"Package"`
}
