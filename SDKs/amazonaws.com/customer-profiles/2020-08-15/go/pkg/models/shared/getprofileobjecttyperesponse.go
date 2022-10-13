package shared

import (
	"time"
)

type GetProfileObjectTypeResponse struct {
	AllowProfileCreation *bool                      `json:"AllowProfileCreation"`
	CreatedAt            *time.Time                 `json:"CreatedAt"`
	Description          string                     `json:"Description"`
	EncryptionKey        *string                    `json:"EncryptionKey"`
	ExpirationDays       *int64                     `json:"ExpirationDays"`
	Fields               map[string]ObjectTypeField `json:"Fields"`
	Keys                 map[string][]ObjectTypeKey `json:"Keys"`
	LastUpdatedAt        *time.Time                 `json:"LastUpdatedAt"`
	ObjectTypeName       string                     `json:"ObjectTypeName"`
	Tags                 map[string]string          `json:"Tags"`
	TemplateID           *string                    `json:"TemplateId"`
}
