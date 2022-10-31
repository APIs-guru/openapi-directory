package shared



type StartKeyPhrasesDetectionJobRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    DataAccessRoleArn string `json:"DataAccessRoleArn"`
    InputDataConfig InputDataConfig `json:"InputDataConfig"`
    JobName *string `json:"JobName,omitempty"`
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    OutputDataConfig OutputDataConfig `json:"OutputDataConfig"`
    Tags []Tag `json:"Tags,omitempty"`
    VolumeKmsKeyID *string `json:"VolumeKmsKeyId,omitempty"`
    VpcConfig *VpcConfig `json:"VpcConfig,omitempty"`
    
}

