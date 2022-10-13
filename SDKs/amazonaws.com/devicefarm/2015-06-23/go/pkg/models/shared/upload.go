package shared

import (
	"time"
)

type Upload struct {
	Arn         *string             `json:"arn"`
	Category    *UploadCategoryEnum `json:"category"`
	ContentType *string             `json:"contentType"`
	Created     *time.Time          `json:"created"`
	Message     *string             `json:"message"`
	Metadata    *string             `json:"metadata"`
	Name        *string             `json:"name"`
	Status      *UploadStatusEnum   `json:"status"`
	Type        *UploadTypeEnum     `json:"type"`
	URL         *string             `json:"url"`
}
