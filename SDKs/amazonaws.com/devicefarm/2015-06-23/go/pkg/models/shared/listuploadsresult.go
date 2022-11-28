package shared

// ListUploadsResult
// Represents the result of a list uploads request.
type ListUploadsResult struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Uploads   []Upload `json:"uploads,omitempty"`
}
