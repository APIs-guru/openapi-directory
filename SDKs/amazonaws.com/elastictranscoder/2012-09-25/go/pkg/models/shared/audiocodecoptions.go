package shared

// AudioCodecOptions
// Options associated with your audio codec.
type AudioCodecOptions struct {
	BitDepth *string `json:"BitDepth,omitempty"`
	BitOrder *string `json:"BitOrder,omitempty"`
	Profile  *string `json:"Profile,omitempty"`
	Signed   *string `json:"Signed,omitempty"`
}
