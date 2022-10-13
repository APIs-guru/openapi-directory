package shared

type CreateAPIDestinationRequest struct {
	ConnectionArn                string                       `json:"ConnectionArn"`
	Description                  *string                      `json:"Description"`
	HTTPMethod                   APIDestinationHTTPMethodEnum `json:"HttpMethod"`
	InvocationEndpoint           string                       `json:"InvocationEndpoint"`
	InvocationRateLimitPerSecond *int64                       `json:"InvocationRateLimitPerSecond"`
	Name                         string                       `json:"Name"`
}
