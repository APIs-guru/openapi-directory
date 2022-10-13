package shared

type JwtConfiguration struct {
	Audience []string `json:"Audience"`
	Issuer   *string  `json:"Issuer"`
}
