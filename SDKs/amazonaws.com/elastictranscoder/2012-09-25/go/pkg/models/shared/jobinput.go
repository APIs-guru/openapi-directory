package shared

// JobInput
// Information about the file that you're transcoding.
type JobInput struct {
	AspectRatio        *string             `json:"AspectRatio,omitempty"`
	Container          *string             `json:"Container,omitempty"`
	DetectedProperties *DetectedProperties `json:"DetectedProperties,omitempty"`
	Encryption         *Encryption         `json:"Encryption,omitempty"`
	FrameRate          *string             `json:"FrameRate,omitempty"`
	InputCaptions      *InputCaptions      `json:"InputCaptions,omitempty"`
	Interlaced         *string             `json:"Interlaced,omitempty"`
	Key                *string             `json:"Key,omitempty"`
	Resolution         *string             `json:"Resolution,omitempty"`
	TimeSpan           *TimeSpan           `json:"TimeSpan,omitempty"`
}
