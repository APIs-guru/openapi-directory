package shared

// AudioParameters
// Parameters required for transcoding audio.
type AudioParameters struct {
	AudioPackingMode *string            `json:"AudioPackingMode,omitempty"`
	BitRate          *string            `json:"BitRate,omitempty"`
	Channels         *string            `json:"Channels,omitempty"`
	Codec            *string            `json:"Codec,omitempty"`
	CodecOptions     *AudioCodecOptions `json:"CodecOptions,omitempty"`
	SampleRate       *string            `json:"SampleRate,omitempty"`
}
