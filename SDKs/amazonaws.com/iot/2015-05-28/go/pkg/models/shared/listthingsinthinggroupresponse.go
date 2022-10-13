package shared

type ListThingsInThingGroupResponse struct {
	NextToken *string  `json:"nextToken"`
	Things    []string `json:"things"`
}
