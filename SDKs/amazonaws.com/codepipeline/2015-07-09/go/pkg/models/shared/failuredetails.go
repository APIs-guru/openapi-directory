package shared



type FailureDetails struct {
    ExternalExecutionID *string `json:"externalExecutionId,omitempty"`
    Message string `json:"message"`
    Type FailureTypeEnum `json:"type"`
    
}

