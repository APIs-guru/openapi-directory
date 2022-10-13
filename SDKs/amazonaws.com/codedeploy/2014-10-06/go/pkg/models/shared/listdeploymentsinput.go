package shared

type ListDeploymentsInput struct {
	ApplicationName     *string                `json:"applicationName"`
	CreateTimeRange     *TimeRange             `json:"createTimeRange"`
	DeploymentGroupName *string                `json:"deploymentGroupName"`
	ExternalID          *string                `json:"externalId"`
	IncludeOnlyStatuses []DeploymentStatusEnum `json:"includeOnlyStatuses"`
	NextToken           *string                `json:"nextToken"`
}
