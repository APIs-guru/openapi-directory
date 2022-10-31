package shared

type UpdateAPIDestinationRequest struct {
	ConnectionArn                *string                       `json:"ConnectionArn,omitempty"`
	Description                  *string                       `json:"Description,omitempty"`
	HTTPMethod                   *APIDestinationHTTPMethodEnum `json:"HttpMethod,omitempty"`
	InvocationEndpoint           *string                       `json:"InvocationEndpoint,omitempty"`
	InvocationRateLimitPerSecond *int64                        `json:"InvocationRateLimitPerSecond,omitempty"`
	Name                         string                        `json:"Name"`
}
