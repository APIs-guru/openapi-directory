package shared

import (
	"time"
)

type MemberDetail struct {
	AccountID                            *string                   `json:"AccountId,omitempty"`
	AdministratorID                      *string                   `json:"AdministratorId,omitempty"`
	DisabledReason                       *MemberDisabledReasonEnum `json:"DisabledReason,omitempty"`
	EmailAddress                         *string                   `json:"EmailAddress,omitempty"`
	GraphArn                             *string                   `json:"GraphArn,omitempty"`
	InvitedTime                          *time.Time                `json:"InvitedTime,omitempty"`
	MasterID                             *string                   `json:"MasterId,omitempty"`
	PercentOfGraphUtilization            *float64                  `json:"PercentOfGraphUtilization,omitempty"`
	PercentOfGraphUtilizationUpdatedTime *time.Time                `json:"PercentOfGraphUtilizationUpdatedTime,omitempty"`
	Status                               *MemberStatusEnum         `json:"Status,omitempty"`
	UpdatedTime                          *time.Time                `json:"UpdatedTime,omitempty"`
	VolumeUsageInBytes                   *int64                    `json:"VolumeUsageInBytes,omitempty"`
	VolumeUsageUpdatedTime               *time.Time                `json:"VolumeUsageUpdatedTime,omitempty"`
}
