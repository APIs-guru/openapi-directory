package shared

// SetIdentityPoolConfigurationResponse
// The output for the SetIdentityPoolConfiguration operation
type SetIdentityPoolConfigurationResponse struct {
	CognitoStreams *CognitoStreams `json:"CognitoStreams,omitempty"`
	IdentityPoolID *string         `json:"IdentityPoolId,omitempty"`
	PushSync       *PushSync       `json:"PushSync,omitempty"`
}
