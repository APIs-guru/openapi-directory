package shared

type ListComponentsResponse struct {
	ComponentVersionList []ComponentVersion `json:"componentVersionList,omitempty"`
	NextToken            *string            `json:"nextToken,omitempty"`
	RequestID            *string            `json:"requestId,omitempty"`
}
