package shared

import (
"time")

type ComprehendMedicalAsyncJobProperties struct {
    DataAccessRoleArn *string `json:"DataAccessRoleArn,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    ExpirationTime *time.Time `json:"ExpirationTime,omitempty"`
    InputDataConfig *InputDataConfig `json:"InputDataConfig,omitempty"`
    JobID *string `json:"JobId,omitempty"`
    JobName *string `json:"JobName,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    KmsKey *string `json:"KMSKey,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    ManifestFilePath *string `json:"ManifestFilePath,omitempty"`
    Message *string `json:"Message,omitempty"`
    ModelVersion *string `json:"ModelVersion,omitempty"`
    OutputDataConfig *OutputDataConfig `json:"OutputDataConfig,omitempty"`
    SubmitTime *time.Time `json:"SubmitTime,omitempty"`
    
}

