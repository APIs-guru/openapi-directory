package shared

type ListRoutesOutput struct {
	NextToken *string    `json:"nextToken"`
	Routes    []RouteRef `json:"routes"`
}
