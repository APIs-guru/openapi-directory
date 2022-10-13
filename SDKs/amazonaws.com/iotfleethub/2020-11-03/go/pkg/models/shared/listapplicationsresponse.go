package shared

type ListApplicationsResponse struct {
	ApplicationSummaries []ApplicationSummary `json:"applicationSummaries"`
	NextToken            *string              `json:"nextToken"`
}
