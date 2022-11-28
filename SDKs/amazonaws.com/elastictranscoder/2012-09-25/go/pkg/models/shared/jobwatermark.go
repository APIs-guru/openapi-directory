package shared

// JobWatermark
// Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
type JobWatermark struct {
	Encryption        *Encryption `json:"Encryption,omitempty"`
	InputKey          *string     `json:"InputKey,omitempty"`
	PresetWatermarkID *string     `json:"PresetWatermarkId,omitempty"`
}
