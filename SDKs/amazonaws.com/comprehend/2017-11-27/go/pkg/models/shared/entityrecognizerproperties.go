package shared

import (
	"time"
)

type EntityRecognizerProperties struct {
	DataAccessRoleArn   *string                          `json:"DataAccessRoleArn"`
	EndTime             *time.Time                       `json:"EndTime"`
	EntityRecognizerArn *string                          `json:"EntityRecognizerArn"`
	InputDataConfig     *EntityRecognizerInputDataConfig `json:"InputDataConfig"`
	LanguageCode        *LanguageCodeEnum                `json:"LanguageCode"`
	Message             *string                          `json:"Message"`
	ModelKmsKeyID       *string                          `json:"ModelKmsKeyId"`
	RecognizerMetadata  *EntityRecognizerMetadata        `json:"RecognizerMetadata"`
	Status              *ModelStatusEnum                 `json:"Status"`
	SubmitTime          *time.Time                       `json:"SubmitTime"`
	TrainingEndTime     *time.Time                       `json:"TrainingEndTime"`
	TrainingStartTime   *time.Time                       `json:"TrainingStartTime"`
	VolumeKmsKeyID      *string                          `json:"VolumeKmsKeyId"`
	VpcConfig           *VpcConfig                       `json:"VpcConfig"`
}
