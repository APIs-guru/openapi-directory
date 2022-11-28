package shared

// ListConfigsResponse
// <p/>
type ListConfigsResponse struct {
	ConfigList []ConfigListItem `json:"configList,omitempty"`
	NextToken  *string          `json:"nextToken,omitempty"`
}
