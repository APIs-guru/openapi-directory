package shared

type ListThingsInThingGroupResponse struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Things    []string `json:"things,omitempty"`
}
