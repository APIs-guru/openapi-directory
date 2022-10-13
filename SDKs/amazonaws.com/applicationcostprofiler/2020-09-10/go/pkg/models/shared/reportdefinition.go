package shared

import (
	"time"
)

type ReportDefinition struct {
	CreatedAt             *time.Time           `json:"createdAt"`
	DestinationS3Location *S3Location          `json:"destinationS3Location"`
	Format                *FormatEnum          `json:"format"`
	LastUpdatedAt         *time.Time           `json:"lastUpdatedAt"`
	ReportDescription     *string              `json:"reportDescription"`
	ReportFrequency       *ReportFrequencyEnum `json:"reportFrequency"`
	ReportID              *string              `json:"reportId"`
}
