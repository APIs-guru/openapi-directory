package shared

// AwsAccount
//
//	The wrapper of account details, such as account ID, email address, and so on.
type AwsAccount struct {
	EmailAddress *string `json:"emailAddress,omitempty"`
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
}
