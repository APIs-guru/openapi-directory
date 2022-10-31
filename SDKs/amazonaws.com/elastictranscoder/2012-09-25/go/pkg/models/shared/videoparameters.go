package shared



type VideoParameters struct {
    AspectRatio *string `json:"AspectRatio,omitempty"`
    BitRate *string `json:"BitRate,omitempty"`
    Codec *string `json:"Codec,omitempty"`
    CodecOptions map[string]string `json:"CodecOptions,omitempty"`
    DisplayAspectRatio *string `json:"DisplayAspectRatio,omitempty"`
    FixedGop *string `json:"FixedGOP,omitempty"`
    FrameRate *string `json:"FrameRate,omitempty"`
    KeyframesMaxDist *string `json:"KeyframesMaxDist,omitempty"`
    MaxFrameRate *string `json:"MaxFrameRate,omitempty"`
    MaxHeight *string `json:"MaxHeight,omitempty"`
    MaxWidth *string `json:"MaxWidth,omitempty"`
    PaddingPolicy *string `json:"PaddingPolicy,omitempty"`
    Resolution *string `json:"Resolution,omitempty"`
    SizingPolicy *string `json:"SizingPolicy,omitempty"`
    Watermarks []PresetWatermark `json:"Watermarks,omitempty"`
    
}

