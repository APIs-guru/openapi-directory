package shared

type UpdateDetectorRequest struct {
	DetectorModelName string                  `json:"detectorModelName"`
	KeyValue          *string                 `json:"keyValue,omitempty"`
	MessageID         string                  `json:"messageId"`
	State             DetectorStateDefinition `json:"state"`
}
