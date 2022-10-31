package shared



type GetIdentityPoolConfigurationResponse struct {
    CognitoStreams *CognitoStreams `json:"CognitoStreams,omitempty"`
    IdentityPoolID *string `json:"IdentityPoolId,omitempty"`
    PushSync *PushSync `json:"PushSync,omitempty"`
    
}

