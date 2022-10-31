package shared



type AggregateComplianceByConfigRule struct {
    AccountID *string `json:"AccountId,omitempty"`
    AwsRegion *string `json:"AwsRegion,omitempty"`
    Compliance *Compliance `json:"Compliance,omitempty"`
    ConfigRuleName *string `json:"ConfigRuleName,omitempty"`
    
}

