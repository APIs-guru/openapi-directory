package shared

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=X-API-Key"`
}

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
