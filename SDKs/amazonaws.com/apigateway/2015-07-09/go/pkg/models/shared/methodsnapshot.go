package shared

type MethodSnapshot struct {
	APIKeyRequired    *bool   `json:"apiKeyRequired"`
	AuthorizationType *string `json:"authorizationType"`
}
