package shared



type ListActionExecutionsOutput struct {
    ActionExecutionDetails []ActionExecutionDetail `json:"actionExecutionDetails,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

