package shared

// UserContextDataType
// Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
type UserContextDataType struct {
	EncodedData *string `json:"EncodedData,omitempty"`
}
