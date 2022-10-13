package shared

import (
	"time"
)

type SchemaExtensionInfo struct {
	Description                 *string                    `json:"Description"`
	DirectoryID                 *string                    `json:"DirectoryId"`
	EndDateTime                 *time.Time                 `json:"EndDateTime"`
	SchemaExtensionID           *string                    `json:"SchemaExtensionId"`
	SchemaExtensionStatus       *SchemaExtensionStatusEnum `json:"SchemaExtensionStatus"`
	SchemaExtensionStatusReason *string                    `json:"SchemaExtensionStatusReason"`
	StartDateTime               *time.Time                 `json:"StartDateTime"`
}
