package shared

type PresetWatermark struct {
	HorizontalAlign  *string `json:"HorizontalAlign,omitempty"`
	HorizontalOffset *string `json:"HorizontalOffset,omitempty"`
	ID               *string `json:"Id,omitempty"`
	MaxHeight        *string `json:"MaxHeight,omitempty"`
	MaxWidth         *string `json:"MaxWidth,omitempty"`
	Opacity          *string `json:"Opacity,omitempty"`
	SizingPolicy     *string `json:"SizingPolicy,omitempty"`
	Target           *string `json:"Target,omitempty"`
	VerticalAlign    *string `json:"VerticalAlign,omitempty"`
	VerticalOffset   *string `json:"VerticalOffset,omitempty"`
}
