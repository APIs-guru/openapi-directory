package shared

// RemediationExceptionResourceKey
// The details that identify a resource within Config, including the resource type and resource ID.
type RemediationExceptionResourceKey struct {
	ResourceID   *string `json:"ResourceId,omitempty"`
	ResourceType *string `json:"ResourceType,omitempty"`
}
