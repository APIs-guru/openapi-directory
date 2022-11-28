package shared

// Measurement
// Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.
type Measurement struct {
	ProcessingConfig *MeasurementProcessingConfig `json:"processingConfig,omitempty"`
}
