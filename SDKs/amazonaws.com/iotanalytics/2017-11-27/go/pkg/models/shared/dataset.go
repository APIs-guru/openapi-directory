package shared

import (
	"time"
)

type Dataset struct {
	Actions                 []DatasetAction              `json:"actions"`
	Arn                     *string                      `json:"arn"`
	ContentDeliveryRules    []DatasetContentDeliveryRule `json:"contentDeliveryRules"`
	CreationTime            *time.Time                   `json:"creationTime"`
	LastUpdateTime          *time.Time                   `json:"lastUpdateTime"`
	LateDataRules           []LateDataRule               `json:"lateDataRules"`
	Name                    *string                      `json:"name"`
	RetentionPeriod         *RetentionPeriod             `json:"retentionPeriod"`
	Status                  *DatasetStatusEnum           `json:"status"`
	Triggers                []DatasetTrigger             `json:"triggers"`
	VersioningConfiguration *VersioningConfiguration     `json:"versioningConfiguration"`
}
