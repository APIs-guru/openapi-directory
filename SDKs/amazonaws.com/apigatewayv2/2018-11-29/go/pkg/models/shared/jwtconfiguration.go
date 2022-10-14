package shared

type JwtConfiguration struct {
	Audience []string `json:"Audience,omitempty"`
	Issuer   *string  `json:"Issuer,omitempty"`
}
