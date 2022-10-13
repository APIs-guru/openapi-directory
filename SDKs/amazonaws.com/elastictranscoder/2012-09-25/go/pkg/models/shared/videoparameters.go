package shared

type VideoParameters struct {
	AspectRatio        *string           `json:"AspectRatio"`
	BitRate            *string           `json:"BitRate"`
	Codec              *string           `json:"Codec"`
	CodecOptions       map[string]string `json:"CodecOptions"`
	DisplayAspectRatio *string           `json:"DisplayAspectRatio"`
	FixedGop           *string           `json:"FixedGOP"`
	FrameRate          *string           `json:"FrameRate"`
	KeyframesMaxDist   *string           `json:"KeyframesMaxDist"`
	MaxFrameRate       *string           `json:"MaxFrameRate"`
	MaxHeight          *string           `json:"MaxHeight"`
	MaxWidth           *string           `json:"MaxWidth"`
	PaddingPolicy      *string           `json:"PaddingPolicy"`
	Resolution         *string           `json:"Resolution"`
	SizingPolicy       *string           `json:"SizingPolicy"`
	Watermarks         []PresetWatermark `json:"Watermarks"`
}
