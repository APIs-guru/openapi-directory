package shared

// DetectedProperties
// The detected properties of the input file. Elastic Transcoder identifies these values from the input file.
type DetectedProperties struct {
	DurationMillis *int64  `json:"DurationMillis,omitempty"`
	FileSize       *int64  `json:"FileSize,omitempty"`
	FrameRate      *string `json:"FrameRate,omitempty"`
	Height         *int64  `json:"Height,omitempty"`
	Width          *int64  `json:"Width,omitempty"`
}
