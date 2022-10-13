package shared

type CaptionSource struct {
	Encryption *Encryption `json:"Encryption"`
	Key        *string     `json:"Key"`
	Label      *string     `json:"Label"`
	Language   *string     `json:"Language"`
	TimeOffset *string     `json:"TimeOffset"`
}
