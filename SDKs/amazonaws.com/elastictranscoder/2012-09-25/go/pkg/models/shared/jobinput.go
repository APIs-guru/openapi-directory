package shared

type JobInput struct {
	AspectRatio        *string             `json:"AspectRatio"`
	Container          *string             `json:"Container"`
	DetectedProperties *DetectedProperties `json:"DetectedProperties"`
	Encryption         *Encryption         `json:"Encryption"`
	FrameRate          *string             `json:"FrameRate"`
	InputCaptions      *InputCaptions      `json:"InputCaptions"`
	Interlaced         *string             `json:"Interlaced"`
	Key                *string             `json:"Key"`
	Resolution         *string             `json:"Resolution"`
	TimeSpan           *TimeSpan           `json:"TimeSpan"`
}
