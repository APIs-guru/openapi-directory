package shared

// AssetErrorDetails
// Contains error details for the requested associate project asset action.
type AssetErrorDetails struct {
	AssetID string             `json:"assetId"`
	Code    AssetErrorCodeEnum `json:"code"`
	Message string             `json:"message"`
}
