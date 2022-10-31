package shared

type ListTunnelsRequest struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
	ThingName  *string `json:"thingName,omitempty"`
}
