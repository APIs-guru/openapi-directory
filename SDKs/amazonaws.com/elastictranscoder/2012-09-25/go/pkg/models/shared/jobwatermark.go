package shared

type JobWatermark struct {
	Encryption        *Encryption `json:"Encryption"`
	InputKey          *string     `json:"InputKey"`
	PresetWatermarkID *string     `json:"PresetWatermarkId"`
}
