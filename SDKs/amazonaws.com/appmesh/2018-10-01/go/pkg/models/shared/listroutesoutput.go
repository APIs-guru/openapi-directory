package shared

type ListRoutesOutput struct {
	NextToken *string    `json:"nextToken,omitempty"`
	Routes    []RouteRef `json:"routes"`
}
