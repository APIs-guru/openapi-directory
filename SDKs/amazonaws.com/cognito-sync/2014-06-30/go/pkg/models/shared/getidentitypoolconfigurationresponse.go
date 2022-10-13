package shared

type GetIdentityPoolConfigurationResponse struct {
	CognitoStreams *CognitoStreams `json:"CognitoStreams"`
	IdentityPoolID *string         `json:"IdentityPoolId"`
	PushSync       *PushSync       `json:"PushSync"`
}
