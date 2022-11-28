package shared

import (
	"time"
)

// SessionMappingDetail
// Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.
type SessionMappingDetail struct {
	CreationTime     *time.Time        `json:"CreationTime,omitempty"`
	IdentityID       *string           `json:"IdentityId,omitempty"`
	IdentityName     *string           `json:"IdentityName,omitempty"`
	IdentityType     *IdentityTypeEnum `json:"IdentityType,omitempty"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime,omitempty"`
	SessionPolicyArn *string           `json:"SessionPolicyArn,omitempty"`
	StudioID         *string           `json:"StudioId,omitempty"`
}
