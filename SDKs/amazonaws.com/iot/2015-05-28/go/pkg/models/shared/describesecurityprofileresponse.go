package shared

import (
	"time"
)

type DescribeSecurityProfileResponse struct {
	AdditionalMetricsToRetain   []string               `json:"additionalMetricsToRetain"`
	AdditionalMetricsToRetainV2 []MetricToRetain       `json:"additionalMetricsToRetainV2"`
	AlertTargets                map[string]AlertTarget `json:"alertTargets"`
	Behaviors                   []Behavior             `json:"behaviors"`
	CreationDate                *time.Time             `json:"creationDate"`
	LastModifiedDate            *time.Time             `json:"lastModifiedDate"`
	SecurityProfileArn          *string                `json:"securityProfileArn"`
	SecurityProfileDescription  *string                `json:"securityProfileDescription"`
	SecurityProfileName         *string                `json:"securityProfileName"`
	Version                     *int64                 `json:"version"`
}
