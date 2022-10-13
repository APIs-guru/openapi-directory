package shared

import (
	"time"
)

type DocumentClassifierProperties struct {
	ClassifierMetadata    *ClassifierMetadata                 `json:"ClassifierMetadata"`
	DataAccessRoleArn     *string                             `json:"DataAccessRoleArn"`
	DocumentClassifierArn *string                             `json:"DocumentClassifierArn"`
	EndTime               *time.Time                          `json:"EndTime"`
	InputDataConfig       *DocumentClassifierInputDataConfig  `json:"InputDataConfig"`
	LanguageCode          *LanguageCodeEnum                   `json:"LanguageCode"`
	Message               *string                             `json:"Message"`
	Mode                  *DocumentClassifierModeEnum         `json:"Mode"`
	ModelKmsKeyID         *string                             `json:"ModelKmsKeyId"`
	OutputDataConfig      *DocumentClassifierOutputDataConfig `json:"OutputDataConfig"`
	Status                *ModelStatusEnum                    `json:"Status"`
	SubmitTime            *time.Time                          `json:"SubmitTime"`
	TrainingEndTime       *time.Time                          `json:"TrainingEndTime"`
	TrainingStartTime     *time.Time                          `json:"TrainingStartTime"`
	VolumeKmsKeyID        *string                             `json:"VolumeKmsKeyId"`
	VpcConfig             *VpcConfig                          `json:"VpcConfig"`
}
