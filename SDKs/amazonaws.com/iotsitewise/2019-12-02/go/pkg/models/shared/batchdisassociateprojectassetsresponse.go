package shared

type BatchDisassociateProjectAssetsResponse struct {
	Errors []AssetErrorDetails `json:"errors,omitempty"`
}
