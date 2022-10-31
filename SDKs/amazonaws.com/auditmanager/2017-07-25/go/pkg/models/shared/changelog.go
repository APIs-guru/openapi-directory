package shared

import (
"time")

type ChangeLog struct {
    Action *ActionEnumEnum `json:"action,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    ObjectType *ObjectTypeEnumEnum `json:"objectType,omitempty"`
    
}

