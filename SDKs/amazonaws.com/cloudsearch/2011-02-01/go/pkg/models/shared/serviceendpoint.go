package shared

// ServiceEndpoint
// The endpoint to which service requests can be submitted, including the actual URL prefix for sending requests and the Amazon Resource Name (ARN) so the endpoint can be referenced in other API calls such as <a>UpdateServiceAccessPolicies</a>.
type ServiceEndpoint struct {
	Arn      *string
	Endpoint *string
}
