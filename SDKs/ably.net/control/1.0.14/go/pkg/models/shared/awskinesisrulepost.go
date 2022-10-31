package shared

type AwsKinesisRulePostRequestModeEnum string

const (
	AwsKinesisRulePostRequestModeEnumSingle AwsKinesisRulePostRequestModeEnum = "single"
)

type AwsKinesisRulePostRuleTypeEnum string

const (
	AwsKinesisRulePostRuleTypeEnumAwsKinesis AwsKinesisRulePostRuleTypeEnum = "aws/kinesis"
)

type AwsKinesisRulePostStatusEnum string

const (
	AwsKinesisRulePostStatusEnumEnabled  AwsKinesisRulePostStatusEnum = "enabled"
	AwsKinesisRulePostStatusEnumDisabled AwsKinesisRulePostStatusEnum = "disabled"
)

type AwsKinesisRulePostTargetFormatEnum string

const (
	AwsKinesisRulePostTargetFormatEnumJSON AwsKinesisRulePostTargetFormatEnum = "json"
)

type AwsKinesisRulePostTarget struct {
	Authentication interface{}                        `json:"authentication"`
	Enveloped      *bool                              `json:"enveloped,omitempty"`
	Format         AwsKinesisRulePostTargetFormatEnum `json:"format"`
	PartitionKey   string                             `json:"partitionKey"`
	Region         string                             `json:"region"`
	StreamName     string                             `json:"streamName"`
}

type AwsKinesisRulePost struct {
	RequestMode AwsKinesisRulePostRequestModeEnum `json:"requestMode"`
	RuleType    AwsKinesisRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                        `json:"source"`
	Status      *AwsKinesisRulePostStatusEnum     `json:"status,omitempty"`
	Target      AwsKinesisRulePostTarget          `json:"target"`
}
