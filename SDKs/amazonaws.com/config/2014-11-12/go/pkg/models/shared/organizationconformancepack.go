package shared

import (
	"time"
)

type OrganizationConformancePack struct {
	ConformancePackInputParameters  []ConformancePackInputParameter `json:"ConformancePackInputParameters"`
	DeliveryS3Bucket                *string                         `json:"DeliveryS3Bucket"`
	DeliveryS3KeyPrefix             *string                         `json:"DeliveryS3KeyPrefix"`
	ExcludedAccounts                []string                        `json:"ExcludedAccounts"`
	LastUpdateTime                  time.Time                       `json:"LastUpdateTime"`
	OrganizationConformancePackArn  string                          `json:"OrganizationConformancePackArn"`
	OrganizationConformancePackName string                          `json:"OrganizationConformancePackName"`
}
