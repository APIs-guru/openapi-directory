package shared

import (
"time")

type DocumentClassifierProperties struct {
    ClassifierMetadata *ClassifierMetadata `json:"ClassifierMetadata,omitempty"`
    DataAccessRoleArn *string `json:"DataAccessRoleArn,omitempty"`
    DocumentClassifierArn *string `json:"DocumentClassifierArn,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    InputDataConfig *DocumentClassifierInputDataConfig `json:"InputDataConfig,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    Message *string `json:"Message,omitempty"`
    Mode *DocumentClassifierModeEnum `json:"Mode,omitempty"`
    ModelKmsKeyID *string `json:"ModelKmsKeyId,omitempty"`
    OutputDataConfig *DocumentClassifierOutputDataConfig `json:"OutputDataConfig,omitempty"`
    Status *ModelStatusEnum `json:"Status,omitempty"`
    SubmitTime *time.Time `json:"SubmitTime,omitempty"`
    TrainingEndTime *time.Time `json:"TrainingEndTime,omitempty"`
    TrainingStartTime *time.Time `json:"TrainingStartTime,omitempty"`
    VolumeKmsKeyID *string `json:"VolumeKmsKeyId,omitempty"`
    VpcConfig *VpcConfig `json:"VpcConfig,omitempty"`
    
}

