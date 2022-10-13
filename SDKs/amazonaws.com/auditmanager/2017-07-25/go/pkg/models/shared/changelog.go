package shared

import (
	"time"
)

type ChangeLog struct {
	Action     *ActionEnumEnum     `json:"action"`
	CreatedAt  *time.Time          `json:"createdAt"`
	CreatedBy  *string             `json:"createdBy"`
	ObjectName *string             `json:"objectName"`
	ObjectType *ObjectTypeEnumEnum `json:"objectType"`
}
