package shared

type BackendAPIAppSyncAuthSettings struct {
	CognitoUserPoolID  *string  `json:"CognitoUserPoolId"`
	Description        *string  `json:"Description"`
	ExpirationTime     *float64 `json:"ExpirationTime"`
	OpenIDAuthTTL      *string  `json:"OpenIDAuthTTL"`
	OpenIDClientID     *string  `json:"OpenIDClientId"`
	OpenIDIatTTL       *string  `json:"OpenIDIatTTL"`
	OpenIDIssueURL     *string  `json:"OpenIDIssueURL"`
	OpenIDProviderName *string  `json:"OpenIDProviderName"`
}
