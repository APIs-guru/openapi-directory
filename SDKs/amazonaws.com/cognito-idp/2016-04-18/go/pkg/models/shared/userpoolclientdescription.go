package shared

// UserPoolClientDescription
// The description of the user pool client.
type UserPoolClientDescription struct {
	ClientID   *string `json:"ClientId,omitempty"`
	ClientName *string `json:"ClientName,omitempty"`
	UserPoolID *string `json:"UserPoolId,omitempty"`
}
