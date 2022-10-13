package shared

type AudioCodecOptions struct {
	BitDepth *string `json:"BitDepth"`
	BitOrder *string `json:"BitOrder"`
	Profile  *string `json:"Profile"`
	Signed   *string `json:"Signed"`
}
