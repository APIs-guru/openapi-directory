package shared

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=X-API-Key"`
}
