package shared



type StartPiiEntitiesDetectionJobRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    DataAccessRoleArn string `json:"DataAccessRoleArn"`
    InputDataConfig InputDataConfig `json:"InputDataConfig"`
    JobName *string `json:"JobName,omitempty"`
    LanguageCode LanguageCodeEnum `json:"LanguageCode"`
    Mode PiiEntitiesDetectionModeEnum `json:"Mode"`
    OutputDataConfig OutputDataConfig `json:"OutputDataConfig"`
    RedactionConfig *RedactionConfig `json:"RedactionConfig,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

