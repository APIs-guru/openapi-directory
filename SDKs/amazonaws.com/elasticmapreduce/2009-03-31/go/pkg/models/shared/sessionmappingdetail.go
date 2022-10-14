package shared

import (
	"time"
)

type SessionMappingDetail struct {
	CreationTime     *time.Time        `json:"CreationTime,omitempty"`
	IdentityID       *string           `json:"IdentityId,omitempty"`
	IdentityName     *string           `json:"IdentityName,omitempty"`
	IdentityType     *IdentityTypeEnum `json:"IdentityType,omitempty"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime,omitempty"`
	SessionPolicyArn *string           `json:"SessionPolicyArn,omitempty"`
	StudioID         *string           `json:"StudioId,omitempty"`
}
