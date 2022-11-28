package shared

// BatchListObjectPolicies
// Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.
type BatchListObjectPolicies struct {
	MaxResults      *int64          `json:"MaxResults,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
	ObjectReference ObjectReference `json:"ObjectReference"`
}
