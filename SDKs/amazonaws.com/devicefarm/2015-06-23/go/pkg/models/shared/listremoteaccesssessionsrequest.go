package shared

// ListRemoteAccessSessionsRequest
// Represents the request to return information about the remote access session.
type ListRemoteAccessSessionsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken,omitempty"`
}
