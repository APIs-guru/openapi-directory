package shared

// JwtConfiguration
// Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
type JwtConfiguration struct {
	Audience []string `json:"Audience,omitempty"`
	Issuer   *string  `json:"Issuer,omitempty"`
}
