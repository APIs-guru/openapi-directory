package shared

type AssetModelStatus struct {
	Error *ErrorDetails       `json:"error"`
	State AssetModelStateEnum `json:"state"`
}
