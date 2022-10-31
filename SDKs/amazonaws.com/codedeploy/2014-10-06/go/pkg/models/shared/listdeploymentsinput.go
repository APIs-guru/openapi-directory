package shared



type ListDeploymentsInput struct {
    ApplicationName *string `json:"applicationName,omitempty"`
    CreateTimeRange *TimeRange `json:"createTimeRange,omitempty"`
    DeploymentGroupName *string `json:"deploymentGroupName,omitempty"`
    ExternalID *string `json:"externalId,omitempty"`
    IncludeOnlyStatuses []DeploymentStatusEnum `json:"includeOnlyStatuses,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

