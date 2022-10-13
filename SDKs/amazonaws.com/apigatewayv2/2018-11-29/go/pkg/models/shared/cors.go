package shared

type Cors struct {
	AllowCredentials *bool    `json:"AllowCredentials"`
	AllowHeaders     []string `json:"AllowHeaders"`
	AllowMethods     []string `json:"AllowMethods"`
	AllowOrigins     []string `json:"AllowOrigins"`
	ExposeHeaders    []string `json:"ExposeHeaders"`
	MaxAge           *int64   `json:"MaxAge"`
}
