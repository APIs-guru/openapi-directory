package shared

type UnsupportedRuleResponseRequestModeEnum string

const (
	UnsupportedRuleResponseRequestModeEnumSingle UnsupportedRuleResponseRequestModeEnum = "single"
	UnsupportedRuleResponseRequestModeEnumBatch  UnsupportedRuleResponseRequestModeEnum = "batch"
)

type UnsupportedRuleResponseRuleTypeEnum string

const (
	UnsupportedRuleResponseRuleTypeEnumUnsupported UnsupportedRuleResponseRuleTypeEnum = "unsupported"
)

type UnsupportedRuleResponseStatusEnum string

const (
	UnsupportedRuleResponseStatusEnumEnabled  UnsupportedRuleResponseStatusEnum = "enabled"
	UnsupportedRuleResponseStatusEnumDisabled UnsupportedRuleResponseStatusEnum = "disabled"
)

type UnsupportedRuleResponseTarget struct {
	URL string `json:"url"`
}

type UnsupportedRuleResponse struct {
	Links       map[string]interface{}                 `json:"_links,omitempty"`
	AppID       *string                                `json:"appId,omitempty"`
	Created     *float64                               `json:"created,omitempty"`
	ID          *string                                `json:"id,omitempty"`
	Modified    *float64                               `json:"modified,omitempty"`
	RequestMode UnsupportedRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    UnsupportedRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                             `json:"source"`
	Status      *UnsupportedRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      UnsupportedRuleResponseTarget          `json:"target"`
	Version     *string                                `json:"version,omitempty"`
}
