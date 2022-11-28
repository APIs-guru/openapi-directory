package shared

import (
	"time"
)

// ChangeLog
//
//	The record of a change within Audit Manager, such as a modified assessment, a delegated control set, and so on.
type ChangeLog struct {
	Action     *ActionEnumEnum     `json:"action,omitempty"`
	CreatedAt  *time.Time          `json:"createdAt,omitempty"`
	CreatedBy  *string             `json:"createdBy,omitempty"`
	ObjectName *string             `json:"objectName,omitempty"`
	ObjectType *ObjectTypeEnumEnum `json:"objectType,omitempty"`
}
