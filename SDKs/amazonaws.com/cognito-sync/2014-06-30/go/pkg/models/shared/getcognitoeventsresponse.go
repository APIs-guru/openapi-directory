package shared

// GetCognitoEventsResponse
// The response from the GetCognitoEvents request
type GetCognitoEventsResponse struct {
	Events map[string]string `json:"Events,omitempty"`
}
