package shared

// Cors
// Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
type Cors struct {
	AllowCredentials *bool    `json:"AllowCredentials,omitempty"`
	AllowHeaders     []string `json:"AllowHeaders,omitempty"`
	AllowMethods     []string `json:"AllowMethods,omitempty"`
	AllowOrigins     []string `json:"AllowOrigins,omitempty"`
	ExposeHeaders    []string `json:"ExposeHeaders,omitempty"`
	MaxAge           *int64   `json:"MaxAge,omitempty"`
}
