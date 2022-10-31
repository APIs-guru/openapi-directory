package shared

type AwsAccount struct {
	EmailAddress *string `json:"emailAddress,omitempty"`
	ID           *string `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
}
