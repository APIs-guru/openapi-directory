package shared

// TrafficMirrorFilterRule
// Describes the Traffic Mirror rule.
type TrafficMirrorFilterRule struct {
	Description               *string
	DestinationCidrBlock      *string
	DestinationPortRange      *TrafficMirrorPortRange
	Protocol                  *int64
	RuleAction                *TrafficMirrorRuleActionEnum
	RuleNumber                *int64
	SourceCidrBlock           *string
	SourcePortRange           *TrafficMirrorPortRange
	TrafficDirection          *TrafficDirectionEnum
	TrafficMirrorFilterID     *string
	TrafficMirrorFilterRuleID *string
}
