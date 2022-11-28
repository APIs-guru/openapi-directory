package shared

// ListPolicyVersionsResponse
// Contains the response to a successful <a>ListPolicyVersions</a> request.
type ListPolicyVersionsResponse struct {
	IsTruncated *bool
	Marker      *string
	Versions    []PolicyVersion
}
