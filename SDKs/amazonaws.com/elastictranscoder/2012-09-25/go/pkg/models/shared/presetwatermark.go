package shared

// PresetWatermark
// <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>
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
