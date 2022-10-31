package shared



type StartFhirExportJobRequest struct {
    ClientToken string `json:"ClientToken"`
    DataAccessRoleArn string `json:"DataAccessRoleArn"`
    DatastoreID string `json:"DatastoreId"`
    JobName *string `json:"JobName,omitempty"`
    OutputDataConfig OutputDataConfig `json:"OutputDataConfig"`
    
}

