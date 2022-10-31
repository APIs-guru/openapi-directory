package shared




type AwsSqsRulePatchRequestModeEnum string

const (
    AwsSqsRulePatchRequestModeEnumSingle AwsSqsRulePatchRequestModeEnum = "single"
)



type AwsSqsRulePatchRuleTypeEnum string

const (
    AwsSqsRulePatchRuleTypeEnumAwsSqs AwsSqsRulePatchRuleTypeEnum = "aws/sqs"
)



type AwsSqsRulePatchStatusEnum string

const (
    AwsSqsRulePatchStatusEnumEnabled AwsSqsRulePatchStatusEnum = "enabled"
AwsSqsRulePatchStatusEnumDisabled AwsSqsRulePatchStatusEnum = "disabled"
)


type AwsSqsRulePatchTarget struct {
    Authentication *interface{} `json:"authentication,omitempty"`
    AwsAccountID *string `json:"awsAccountId,omitempty"`
    Enveloped *bool `json:"enveloped,omitempty"`
    Format *string `json:"format,omitempty"`
    QueueName *string `json:"queueName,omitempty"`
    Region *string `json:"region,omitempty"`
    
}

type AwsSqsRulePatch struct {
    RequestMode *AwsSqsRulePatchRequestModeEnum `json:"requestMode,omitempty"`
    RuleType *AwsSqsRulePatchRuleTypeEnum `json:"ruleType,omitempty"`
    Source *RuleSource `json:"source,omitempty"`
    Status *AwsSqsRulePatchStatusEnum `json:"status,omitempty"`
    Target *AwsSqsRulePatchTarget `json:"target,omitempty"`
    
}

