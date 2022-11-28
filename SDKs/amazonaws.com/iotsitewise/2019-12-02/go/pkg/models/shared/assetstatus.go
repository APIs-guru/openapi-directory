package shared

// AssetStatus
// Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
type AssetStatus struct {
	Error *ErrorDetails  `json:"error,omitempty"`
	State AssetStateEnum `json:"state"`
}
