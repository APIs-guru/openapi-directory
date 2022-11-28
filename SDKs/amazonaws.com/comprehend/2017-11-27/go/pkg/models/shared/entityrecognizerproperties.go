package shared

import (
	"time"
)

// EntityRecognizerProperties
// Describes information about an entity recognizer.
type EntityRecognizerProperties struct {
	DataAccessRoleArn   *string                          `json:"DataAccessRoleArn,omitempty"`
	EndTime             *time.Time                       `json:"EndTime,omitempty"`
	EntityRecognizerArn *string                          `json:"EntityRecognizerArn,omitempty"`
	InputDataConfig     *EntityRecognizerInputDataConfig `json:"InputDataConfig,omitempty"`
	LanguageCode        *LanguageCodeEnum                `json:"LanguageCode,omitempty"`
	Message             *string                          `json:"Message,omitempty"`
	ModelKmsKeyID       *string                          `json:"ModelKmsKeyId,omitempty"`
	RecognizerMetadata  *EntityRecognizerMetadata        `json:"RecognizerMetadata,omitempty"`
	Status              *ModelStatusEnum                 `json:"Status,omitempty"`
	SubmitTime          *time.Time                       `json:"SubmitTime,omitempty"`
	TrainingEndTime     *time.Time                       `json:"TrainingEndTime,omitempty"`
	TrainingStartTime   *time.Time                       `json:"TrainingStartTime,omitempty"`
	VolumeKmsKeyID      *string                          `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig           *VpcConfig                       `json:"VpcConfig,omitempty"`
}
