package shared



type StartPhiDetectionJobRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    DataAccessRoleArn string `json:"DataAccessRoleArn"`
    InputDataConfig InputDataConfig `json:"InputDataConfig"`
    JobName *string `json:"JobName,omitempty"`
    KmsKey *string `json:"KMSKey,omitempty"`
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    OutputDataConfig OutputDataConfig `json:"OutputDataConfig"`
    
}

