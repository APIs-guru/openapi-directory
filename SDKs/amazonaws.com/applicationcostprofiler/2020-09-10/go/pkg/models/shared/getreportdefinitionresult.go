package shared

import (
	"time"
)

type GetReportDefinitionResult struct {
	CreatedAt             time.Time           `json:"createdAt"`
	DestinationS3Location S3Location          `json:"destinationS3Location"`
	Format                FormatEnum          `json:"format"`
	LastUpdated           time.Time           `json:"lastUpdated"`
	ReportDescription     string              `json:"reportDescription"`
	ReportFrequency       ReportFrequencyEnum `json:"reportFrequency"`
	ReportID              string              `json:"reportId"`
}
