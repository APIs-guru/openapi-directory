package shared

// ListRoutesOutput
// <zonbook></zonbook><xhtml></xhtml>
type ListRoutesOutput struct {
	NextToken *string    `json:"nextToken,omitempty"`
	Routes    []RouteRef `json:"routes"`
}
