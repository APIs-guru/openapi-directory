package shared



type Scope struct {
    AwsAccounts []AwsAccount `json:"awsAccounts,omitempty"`
    AwsServices []AwsService `json:"awsServices,omitempty"`
    
}

