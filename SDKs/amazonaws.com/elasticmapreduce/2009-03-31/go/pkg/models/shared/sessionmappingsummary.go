package shared

import (
	"time"
)

// SessionMappingSummary
// Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.
type SessionMappingSummary struct {
	CreationTime     *time.Time        `json:"CreationTime,omitempty"`
	IdentityID       *string           `json:"IdentityId,omitempty"`
	IdentityName     *string           `json:"IdentityName,omitempty"`
	IdentityType     *IdentityTypeEnum `json:"IdentityType,omitempty"`
	SessionPolicyArn *string           `json:"SessionPolicyArn,omitempty"`
	StudioID         *string           `json:"StudioId,omitempty"`
}
