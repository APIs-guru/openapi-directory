package shared

// Scope
//
//	The wrapper that contains the accounts and services in scope for the assessment.
type Scope struct {
	AwsAccounts []AwsAccount `json:"awsAccounts,omitempty"`
	AwsServices []AwsService `json:"awsServices,omitempty"`
}
