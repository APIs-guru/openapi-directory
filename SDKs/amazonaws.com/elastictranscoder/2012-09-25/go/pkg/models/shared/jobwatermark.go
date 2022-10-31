package shared



type JobWatermark struct {
    Encryption *Encryption `json:"Encryption,omitempty"`
    InputKey *string `json:"InputKey,omitempty"`
    PresetWatermarkID *string `json:"PresetWatermarkId,omitempty"`
    
}

