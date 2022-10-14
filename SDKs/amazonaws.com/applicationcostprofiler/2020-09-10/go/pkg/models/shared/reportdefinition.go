package shared

import (
	"time"
)

type ReportDefinition struct {
	CreatedAt             *time.Time           `json:"createdAt,omitempty"`
	DestinationS3Location *S3Location          `json:"destinationS3Location,omitempty"`
	Format                *FormatEnum          `json:"format,omitempty"`
	LastUpdatedAt         *time.Time           `json:"lastUpdatedAt,omitempty"`
	ReportDescription     *string              `json:"reportDescription,omitempty"`
	ReportFrequency       *ReportFrequencyEnum `json:"reportFrequency,omitempty"`
	ReportID              *string              `json:"reportId,omitempty"`
}
