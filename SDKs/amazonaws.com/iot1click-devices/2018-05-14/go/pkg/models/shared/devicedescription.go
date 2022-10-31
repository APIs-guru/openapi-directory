package shared

type DeviceDescription struct {
	Arn           *string           `json:"Arn,omitempty"`
	Attributes    map[string]string `json:"Attributes,omitempty"`
	DeviceID      *string           `json:"DeviceId,omitempty"`
	Enabled       *bool             `json:"Enabled,omitempty"`
	RemainingLife *float64          `json:"RemainingLife,omitempty"`
	Tags          map[string]string `json:"Tags,omitempty"`
	Type          *string           `json:"Type,omitempty"`
}
