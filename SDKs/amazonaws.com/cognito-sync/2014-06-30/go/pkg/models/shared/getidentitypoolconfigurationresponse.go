package shared

// GetIdentityPoolConfigurationResponse
// The output for the GetIdentityPoolConfiguration operation.
type GetIdentityPoolConfigurationResponse struct {
	CognitoStreams *CognitoStreams `json:"CognitoStreams,omitempty"`
	IdentityPoolID *string         `json:"IdentityPoolId,omitempty"`
	PushSync       *PushSync       `json:"PushSync,omitempty"`
}
