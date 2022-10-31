package shared



type SetIdentityPoolConfigurationResponse struct {
    CognitoStreams *CognitoStreams `json:"CognitoStreams,omitempty"`
    IdentityPoolID *string `json:"IdentityPoolId,omitempty"`
    PushSync *PushSync `json:"PushSync,omitempty"`
    
}

