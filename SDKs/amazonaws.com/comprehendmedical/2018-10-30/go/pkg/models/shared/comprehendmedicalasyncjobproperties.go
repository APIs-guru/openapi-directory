package shared

import (
	"time"
)

type ComprehendMedicalAsyncJobProperties struct {
	DataAccessRoleArn *string           `json:"DataAccessRoleArn"`
	EndTime           *time.Time        `json:"EndTime"`
	ExpirationTime    *time.Time        `json:"ExpirationTime"`
	InputDataConfig   *InputDataConfig  `json:"InputDataConfig"`
	JobID             *string           `json:"JobId"`
	JobName           *string           `json:"JobName"`
	JobStatus         *JobStatusEnum    `json:"JobStatus"`
	KmsKey            *string           `json:"KMSKey"`
	LanguageCode      *LanguageCodeEnum `json:"LanguageCode"`
	ManifestFilePath  *string           `json:"ManifestFilePath"`
	Message           *string           `json:"Message"`
	ModelVersion      *string           `json:"ModelVersion"`
	OutputDataConfig  *OutputDataConfig `json:"OutputDataConfig"`
	SubmitTime        *time.Time        `json:"SubmitTime"`
}
