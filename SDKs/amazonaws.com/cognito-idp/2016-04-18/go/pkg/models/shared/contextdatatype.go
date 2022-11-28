package shared

// ContextDataType
// Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
type ContextDataType struct {
	EncodedData *string      `json:"EncodedData,omitempty"`
	HTTPHeaders []HTTPHeader `json:"HttpHeaders"`
	IPAddress   string       `json:"IpAddress"`
	ServerName  string       `json:"ServerName"`
	ServerPath  string       `json:"ServerPath"`
}
