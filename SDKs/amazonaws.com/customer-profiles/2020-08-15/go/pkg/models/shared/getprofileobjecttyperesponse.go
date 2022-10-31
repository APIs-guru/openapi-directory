package shared

import (
"time")

type GetProfileObjectTypeResponse struct {
    AllowProfileCreation *bool `json:"AllowProfileCreation,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    Description string `json:"Description"`
    EncryptionKey *string `json:"EncryptionKey,omitempty"`
    ExpirationDays *int64 `json:"ExpirationDays,omitempty"`
    Fields map[string]ObjectTypeField `json:"Fields,omitempty"`
    Keys map[string][]ObjectTypeKey `json:"Keys,omitempty"`
    LastUpdatedAt *time.Time `json:"LastUpdatedAt,omitempty"`
    ObjectTypeName string `json:"ObjectTypeName"`
    Tags map[string]string `json:"Tags,omitempty"`
    TemplateID *string `json:"TemplateId,omitempty"`
    
}

