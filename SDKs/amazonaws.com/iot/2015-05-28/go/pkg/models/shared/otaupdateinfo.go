package shared

import (
	"time"
)

type OtaUpdateInfo struct {
	AdditionalParameters          map[string]string              `json:"additionalParameters"`
	AwsIotJobArn                  *string                        `json:"awsIotJobArn"`
	AwsIotJobID                   *string                        `json:"awsIotJobId"`
	AwsJobExecutionsRolloutConfig *AwsJobExecutionsRolloutConfig `json:"awsJobExecutionsRolloutConfig"`
	AwsJobPresignedURLConfig      *AwsJobPresignedURLConfig      `json:"awsJobPresignedUrlConfig"`
	CreationDate                  *time.Time                     `json:"creationDate"`
	Description                   *string                        `json:"description"`
	ErrorInfo                     *ErrorInfo                     `json:"errorInfo"`
	LastModifiedDate              *time.Time                     `json:"lastModifiedDate"`
	OtaUpdateArn                  *string                        `json:"otaUpdateArn"`
	OtaUpdateFiles                []OtaUpdateFile                `json:"otaUpdateFiles"`
	OtaUpdateID                   *string                        `json:"otaUpdateId"`
	OtaUpdateStatus               *OtaUpdateStatusEnum           `json:"otaUpdateStatus"`
	Protocols                     []ProtocolEnum                 `json:"protocols"`
	TargetSelection               *TargetSelectionEnum           `json:"targetSelection"`
	Targets                       []string                       `json:"targets"`
}
