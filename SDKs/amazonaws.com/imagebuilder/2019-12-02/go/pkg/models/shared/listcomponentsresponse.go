package shared

type ListComponentsResponse struct {
	ComponentVersionList []ComponentVersion `json:"componentVersionList"`
	NextToken            *string            `json:"nextToken"`
	RequestID            *string            `json:"requestId"`
}
