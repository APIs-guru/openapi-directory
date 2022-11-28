package shared

// DetectorDebugOption
// The detector model and the specific detectors (instances) for which the logging level is given.
type DetectorDebugOption struct {
	DetectorModelName string  `json:"detectorModelName"`
	KeyValue          *string `json:"keyValue,omitempty"`
}
