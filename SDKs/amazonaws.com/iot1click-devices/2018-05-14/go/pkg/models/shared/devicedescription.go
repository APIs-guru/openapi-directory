package shared

type DeviceDescription struct {
	Arn           *string           `json:"Arn"`
	Attributes    map[string]string `json:"Attributes"`
	DeviceID      *string           `json:"DeviceId"`
	Enabled       *bool             `json:"Enabled"`
	RemainingLife *float64          `json:"RemainingLife"`
	Tags          map[string]string `json:"Tags"`
	Type          *string           `json:"Type"`
}
