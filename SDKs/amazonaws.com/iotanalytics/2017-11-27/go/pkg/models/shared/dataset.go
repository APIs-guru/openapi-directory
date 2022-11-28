package shared

import (
	"time"
)

// Dataset
// Information about a dataset.
type Dataset struct {
	Actions                 []DatasetAction              `json:"actions,omitempty"`
	Arn                     *string                      `json:"arn,omitempty"`
	ContentDeliveryRules    []DatasetContentDeliveryRule `json:"contentDeliveryRules,omitempty"`
	CreationTime            *time.Time                   `json:"creationTime,omitempty"`
	LastUpdateTime          *time.Time                   `json:"lastUpdateTime,omitempty"`
	LateDataRules           []LateDataRule               `json:"lateDataRules,omitempty"`
	Name                    *string                      `json:"name,omitempty"`
	RetentionPeriod         *RetentionPeriod             `json:"retentionPeriod,omitempty"`
	Status                  *DatasetStatusEnum           `json:"status,omitempty"`
	Triggers                []DatasetTrigger             `json:"triggers,omitempty"`
	VersioningConfiguration *VersioningConfiguration     `json:"versioningConfiguration,omitempty"`
}
