package shared



type ListDetectMitigationActionsExecutionsResponse struct {
    ActionsExecutions []DetectMitigationActionExecution `json:"actionsExecutions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

