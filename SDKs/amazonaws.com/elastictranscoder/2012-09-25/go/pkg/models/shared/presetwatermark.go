package shared

type PresetWatermark struct {
	HorizontalAlign  *string `json:"HorizontalAlign"`
	HorizontalOffset *string `json:"HorizontalOffset"`
	ID               *string `json:"Id"`
	MaxHeight        *string `json:"MaxHeight"`
	MaxWidth         *string `json:"MaxWidth"`
	Opacity          *string `json:"Opacity"`
	SizingPolicy     *string `json:"SizingPolicy"`
	Target           *string `json:"Target"`
	VerticalAlign    *string `json:"VerticalAlign"`
	VerticalOffset   *string `json:"VerticalOffset"`
}
