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
	Authentication *interface{}                         `json:"authentication"`
	Enveloped      *bool                                `json:"enveloped"`
	Format         *AwsKinesisRulePatchTargetFormatEnum `json:"format"`
	PartitionKey   *string                              `json:"partitionKey"`
	Region         *string                              `json:"region"`
	StreamName     *string                              `json:"streamName"`
}

type AwsKinesisRulePatch struct {
	RequestMode *AwsKinesisRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *AwsKinesisRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                         `json:"source"`
	Status      *AwsKinesisRulePatchStatusEnum      `json:"status"`
	Target      *AwsKinesisRulePatchTarget          `json:"target"`
}
