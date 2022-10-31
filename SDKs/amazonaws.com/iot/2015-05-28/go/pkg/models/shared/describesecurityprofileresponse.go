package shared

import (
"time")

type DescribeSecurityProfileResponse struct {
    AdditionalMetricsToRetain []string `json:"additionalMetricsToRetain,omitempty"`
    AdditionalMetricsToRetainV2 []MetricToRetain `json:"additionalMetricsToRetainV2,omitempty"`
    AlertTargets map[string]AlertTarget `json:"alertTargets,omitempty"`
    Behaviors []Behavior `json:"behaviors,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    SecurityProfileArn *string `json:"securityProfileArn,omitempty"`
    SecurityProfileDescription *string `json:"securityProfileDescription,omitempty"`
    SecurityProfileName *string `json:"securityProfileName,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

