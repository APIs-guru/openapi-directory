package shared

// AssetModelStatus
// Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
type AssetModelStatus struct {
	Error *ErrorDetails       `json:"error,omitempty"`
	State AssetModelStateEnum `json:"state"`
}
