package shared

type AwsKinesisRuleResponseRequestModeEnum string

const (
	AwsKinesisRuleResponseRequestModeEnumSingle AwsKinesisRuleResponseRequestModeEnum = "single"
)

type AwsKinesisRuleResponseRuleTypeEnum string

const (
	AwsKinesisRuleResponseRuleTypeEnumAwsKinesis AwsKinesisRuleResponseRuleTypeEnum = "aws/kinesis"
)

type AwsKinesisRuleResponseStatusEnum string

const (
	AwsKinesisRuleResponseStatusEnumEnabled  AwsKinesisRuleResponseStatusEnum = "enabled"
	AwsKinesisRuleResponseStatusEnumDisabled AwsKinesisRuleResponseStatusEnum = "disabled"
)

type AwsKinesisRuleResponseTargetFormatEnum string

const (
	AwsKinesisRuleResponseTargetFormatEnumJSON AwsKinesisRuleResponseTargetFormatEnum = "json"
)

type AwsKinesisRuleResponseTarget struct {
	Authentication interface{}                            `json:"authentication"`
	Enveloped      *bool                                  `json:"enveloped,omitempty"`
	Format         AwsKinesisRuleResponseTargetFormatEnum `json:"format"`
	PartitionKey   string                                 `json:"partitionKey"`
	Region         string                                 `json:"region"`
	StreamName     string                                 `json:"streamName"`
}

type AwsKinesisRuleResponse struct {
	Links       map[string]interface{}                `json:"_links,omitempty"`
	AppID       *string                               `json:"appId,omitempty"`
	Created     *float64                              `json:"created,omitempty"`
	ID          *string                               `json:"id,omitempty"`
	Modified    *float64                              `json:"modified,omitempty"`
	RequestMode AwsKinesisRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AwsKinesisRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                            `json:"source"`
	Status      *AwsKinesisRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      AwsKinesisRuleResponseTarget          `json:"target"`
	Version     *string                               `json:"version,omitempty"`
}
