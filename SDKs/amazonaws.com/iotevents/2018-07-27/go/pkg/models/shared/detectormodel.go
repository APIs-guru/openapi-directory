package shared

// DetectorModel
// Information about the detector model.
type DetectorModel struct {
	DetectorModelConfiguration *DetectorModelConfiguration `json:"detectorModelConfiguration,omitempty"`
	DetectorModelDefinition    *DetectorModelDefinition    `json:"detectorModelDefinition,omitempty"`
}
