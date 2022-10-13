package shared

import (
	"time"
)

type DescribeDatasetImportJobResponse struct {
	CreationTime                    *time.Time            `json:"CreationTime"`
	DataSize                        *float64              `json:"DataSize"`
	DataSource                      *DataSource           `json:"DataSource"`
	DatasetArn                      *string               `json:"DatasetArn"`
	DatasetImportJobArn             *string               `json:"DatasetImportJobArn"`
	DatasetImportJobName            *string               `json:"DatasetImportJobName"`
	EstimatedTimeRemainingInMinutes *int64                `json:"EstimatedTimeRemainingInMinutes"`
	FieldStatistics                 map[string]Statistics `json:"FieldStatistics"`
	GeolocationFormat               *string               `json:"GeolocationFormat"`
	LastModificationTime            *time.Time            `json:"LastModificationTime"`
	Message                         *string               `json:"Message"`
	Status                          *string               `json:"Status"`
	TimeZone                        *string               `json:"TimeZone"`
	TimestampFormat                 *string               `json:"TimestampFormat"`
	UseGeolocationForTimeZone       *bool                 `json:"UseGeolocationForTimeZone"`
}
