package shared

type AssetStatus struct {
	Error *ErrorDetails  `json:"error"`
	State AssetStateEnum `json:"state"`
}
