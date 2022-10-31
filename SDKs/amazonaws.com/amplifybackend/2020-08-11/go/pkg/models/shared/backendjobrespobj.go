package shared



type BackendJobRespObj struct {
    AppID string `json:"AppId"`
    BackendEnvironmentName string `json:"BackendEnvironmentName"`
    CreateTime *string `json:"CreateTime,omitempty"`
    Error *string `json:"Error,omitempty"`
    JobID *string `json:"JobId,omitempty"`
    Operation *string `json:"Operation,omitempty"`
    Status *string `json:"Status,omitempty"`
    UpdateTime *string `json:"UpdateTime,omitempty"`
    
}

