package shared



type BackendAPIAppSyncAuthSettings struct {
    CognitoUserPoolID *string `json:"CognitoUserPoolId,omitempty"`
    Description *string `json:"Description,omitempty"`
    ExpirationTime *float64 `json:"ExpirationTime,omitempty"`
    OpenIDAuthTTL *string `json:"OpenIDAuthTTL,omitempty"`
    OpenIDClientID *string `json:"OpenIDClientId,omitempty"`
    OpenIDIatTTL *string `json:"OpenIDIatTTL,omitempty"`
    OpenIDIssueURL *string `json:"OpenIDIssueURL,omitempty"`
    OpenIDProviderName *string `json:"OpenIDProviderName,omitempty"`
    
}

