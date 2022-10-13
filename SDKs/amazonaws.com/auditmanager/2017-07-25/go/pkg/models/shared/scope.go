package shared

type Scope struct {
	AwsAccounts []AwsAccount `json:"awsAccounts"`
	AwsServices []AwsService `json:"awsServices"`
}
