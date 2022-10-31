package shared

import (
	"time"
)

type DescribeDatasetImportJobResponse struct {
	CreationTime                    *time.Time            `json:"CreationTime,omitempty"`
	DataSize                        *float64              `json:"DataSize,omitempty"`
	DataSource                      *DataSource           `json:"DataSource,omitempty"`
	DatasetArn                      *string               `json:"DatasetArn,omitempty"`
	DatasetImportJobArn             *string               `json:"DatasetImportJobArn,omitempty"`
	DatasetImportJobName            *string               `json:"DatasetImportJobName,omitempty"`
	EstimatedTimeRemainingInMinutes *int64                `json:"EstimatedTimeRemainingInMinutes,omitempty"`
	FieldStatistics                 map[string]Statistics `json:"FieldStatistics,omitempty"`
	GeolocationFormat               *string               `json:"GeolocationFormat,omitempty"`
	LastModificationTime            *time.Time            `json:"LastModificationTime,omitempty"`
	Message                         *string               `json:"Message,omitempty"`
	Status                          *string               `json:"Status,omitempty"`
	TimeZone                        *string               `json:"TimeZone,omitempty"`
	TimestampFormat                 *string               `json:"TimestampFormat,omitempty"`
	UseGeolocationForTimeZone       *bool                 `json:"UseGeolocationForTimeZone,omitempty"`
}
