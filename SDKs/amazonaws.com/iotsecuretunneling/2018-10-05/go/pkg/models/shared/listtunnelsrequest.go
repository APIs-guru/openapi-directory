package shared

type ListTunnelsRequest struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
	ThingName  *string `json:"thingName"`
}
