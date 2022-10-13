package shared

import (
	"time"
)

type MemberDetail struct {
	AccountID                            *string                   `json:"AccountId"`
	AdministratorID                      *string                   `json:"AdministratorId"`
	DisabledReason                       *MemberDisabledReasonEnum `json:"DisabledReason"`
	EmailAddress                         *string                   `json:"EmailAddress"`
	GraphArn                             *string                   `json:"GraphArn"`
	InvitedTime                          *time.Time                `json:"InvitedTime"`
	MasterID                             *string                   `json:"MasterId"`
	PercentOfGraphUtilization            *float64                  `json:"PercentOfGraphUtilization"`
	PercentOfGraphUtilizationUpdatedTime *time.Time                `json:"PercentOfGraphUtilizationUpdatedTime"`
	Status                               *MemberStatusEnum         `json:"Status"`
	UpdatedTime                          *time.Time                `json:"UpdatedTime"`
	VolumeUsageInBytes                   *int64                    `json:"VolumeUsageInBytes"`
	VolumeUsageUpdatedTime               *time.Time                `json:"VolumeUsageUpdatedTime"`
}
