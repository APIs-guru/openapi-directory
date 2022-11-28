package shared

import (
	"time"
)

// OrganizationConformancePack
// An organization conformance pack that has information about conformance packs that Config creates in member accounts.
type OrganizationConformancePack struct {
	ConformancePackInputParameters  []ConformancePackInputParameter `json:"ConformancePackInputParameters,omitempty"`
	DeliveryS3Bucket                *string                         `json:"DeliveryS3Bucket,omitempty"`
	DeliveryS3KeyPrefix             *string                         `json:"DeliveryS3KeyPrefix,omitempty"`
	ExcludedAccounts                []string                        `json:"ExcludedAccounts,omitempty"`
	LastUpdateTime                  time.Time                       `json:"LastUpdateTime"`
	OrganizationConformancePackArn  string                          `json:"OrganizationConformancePackArn"`
	OrganizationConformancePackName string                          `json:"OrganizationConformancePackName"`
}
