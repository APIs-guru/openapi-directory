package shared

type AudioParameters struct {
	AudioPackingMode *string            `json:"AudioPackingMode"`
	BitRate          *string            `json:"BitRate"`
	Channels         *string            `json:"Channels"`
	Codec            *string            `json:"Codec"`
	CodecOptions     *AudioCodecOptions `json:"CodecOptions"`
	SampleRate       *string            `json:"SampleRate"`
}
