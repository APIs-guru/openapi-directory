package shared

import (
	"time"
)

// SchemaExtensionInfo
// Information about a schema extension.
type SchemaExtensionInfo struct {
	Description                 *string                    `json:"Description,omitempty"`
	DirectoryID                 *string                    `json:"DirectoryId,omitempty"`
	EndDateTime                 *time.Time                 `json:"EndDateTime,omitempty"`
	SchemaExtensionID           *string                    `json:"SchemaExtensionId,omitempty"`
	SchemaExtensionStatus       *SchemaExtensionStatusEnum `json:"SchemaExtensionStatus,omitempty"`
	SchemaExtensionStatusReason *string                    `json:"SchemaExtensionStatusReason,omitempty"`
	StartDateTime               *time.Time                 `json:"StartDateTime,omitempty"`
}
