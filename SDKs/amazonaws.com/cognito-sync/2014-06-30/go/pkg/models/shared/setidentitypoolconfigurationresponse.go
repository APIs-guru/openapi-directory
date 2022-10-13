package shared

type SetIdentityPoolConfigurationResponse struct {
	CognitoStreams *CognitoStreams `json:"CognitoStreams"`
	IdentityPoolID *string         `json:"IdentityPoolId"`
	PushSync       *PushSync       `json:"PushSync"`
}
