package shared

type DetectedProperties struct {
	DurationMillis *int64  `json:"DurationMillis"`
	FileSize       *int64  `json:"FileSize"`
	FrameRate      *string `json:"FrameRate"`
	Height         *int64  `json:"Height"`
	Width          *int64  `json:"Width"`
}
