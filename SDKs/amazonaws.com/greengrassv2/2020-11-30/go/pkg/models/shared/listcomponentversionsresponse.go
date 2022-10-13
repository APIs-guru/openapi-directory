package shared

type ListComponentVersionsResponse struct {
	ComponentVersions []ComponentVersionListItem `json:"componentVersions"`
	NextToken         *string                    `json:"nextToken"`
}
