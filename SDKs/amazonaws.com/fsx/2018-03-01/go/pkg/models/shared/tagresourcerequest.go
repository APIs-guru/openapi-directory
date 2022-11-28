package shared

// TagResourceRequest
// The request object for the <code>TagResource</code> operation.
type TagResourceRequest struct {
	ResourceArn string `json:"ResourceARN"`
	Tags        []Tag  `json:"Tags"`
}
