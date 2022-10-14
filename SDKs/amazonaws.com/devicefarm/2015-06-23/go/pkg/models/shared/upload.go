package shared

import (
	"time"
)

type Upload struct {
	Arn         *string             `json:"arn,omitempty"`
	Category    *UploadCategoryEnum `json:"category,omitempty"`
	ContentType *string             `json:"contentType,omitempty"`
	Created     *time.Time          `json:"created,omitempty"`
	Message     *string             `json:"message,omitempty"`
	Metadata    *string             `json:"metadata,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Status      *UploadStatusEnum   `json:"status,omitempty"`
	Type        *UploadTypeEnum     `json:"type,omitempty"`
	URL         *string             `json:"url,omitempty"`
}
