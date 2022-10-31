package shared

type AwsKinesisRulePatchRequestModeEnum string

const (
	AwsKinesisRulePatchRequestModeEnumSingle AwsKinesisRulePatchRequestModeEnum = "single"
)

type AwsKinesisRulePatchRuleTypeEnum string

const (
	AwsKinesisRulePatchRuleTypeEnumAwsKinesis AwsKinesisRulePatchRuleTypeEnum = "aws/kinesis"
)

type AwsKinesisRulePatchStatusEnum string

const (
	AwsKinesisRulePatchStatusEnumEnabled  AwsKinesisRulePatchStatusEnum = "enabled"
	AwsKinesisRulePatchStatusEnumDisabled AwsKinesisRulePatchStatusEnum = "disabled"
)

type AwsKinesisRulePatchTargetFormatEnum string

const (
	AwsKinesisRulePatchTargetFormatEnumJSON AwsKinesisRulePatchTargetFormatEnum = "json"
)

type AwsKinesisRulePatchTarget struct {
	Authentication *interface{}                         `json:"authentication,omitempty"`
	Enveloped      *bool                                `json:"enveloped,omitempty"`
	Format         *AwsKinesisRulePatchTargetFormatEnum `json:"format,omitempty"`
	PartitionKey   *string                              `json:"partitionKey,omitempty"`
	Region         *string                              `json:"region,omitempty"`
	StreamName     *string                              `json:"streamName,omitempty"`
}

type AwsKinesisRulePatch struct {
	RequestMode *AwsKinesisRulePatchRequestModeEnum `json:"requestMode,omitempty"`
	RuleType    *AwsKinesisRulePatchRuleTypeEnum    `json:"ruleType,omitempty"`
	Source      *RuleSource                         `json:"source,omitempty"`
	Status      *AwsKinesisRulePatchStatusEnum      `json:"status,omitempty"`
	Target      *AwsKinesisRulePatchTarget          `json:"target,omitempty"`
}
