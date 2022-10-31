package shared

type AssetErrorDetails struct {
	AssetID string             `json:"assetId"`
	Code    AssetErrorCodeEnum `json:"code"`
	Message string             `json:"message"`
}
