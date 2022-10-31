package shared

import (
"time")

type OtaUpdateInfo struct {
    AdditionalParameters map[string]string `json:"additionalParameters,omitempty"`
    AwsIotJobArn *string `json:"awsIotJobArn,omitempty"`
    AwsIotJobID *string `json:"awsIotJobId,omitempty"`
    AwsJobExecutionsRolloutConfig *AwsJobExecutionsRolloutConfig `json:"awsJobExecutionsRolloutConfig,omitempty"`
    AwsJobPresignedURLConfig *AwsJobPresignedURLConfig `json:"awsJobPresignedUrlConfig,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    Description *string `json:"description,omitempty"`
    ErrorInfo *ErrorInfo `json:"errorInfo,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    OtaUpdateArn *string `json:"otaUpdateArn,omitempty"`
    OtaUpdateFiles []OtaUpdateFile `json:"otaUpdateFiles,omitempty"`
    OtaUpdateID *string `json:"otaUpdateId,omitempty"`
    OtaUpdateStatus *OtaUpdateStatusEnum `json:"otaUpdateStatus,omitempty"`
    Protocols []ProtocolEnum `json:"protocols,omitempty"`
    TargetSelection *TargetSelectionEnum `json:"targetSelection,omitempty"`
    Targets []string `json:"targets,omitempty"`
    
}

