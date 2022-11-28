package shared

// ApprovalStateChangedEventMetadata
// Returns information about a change in the approval state for a pull request.
type ApprovalStateChangedEventMetadata struct {
	ApprovalStatus *ApprovalStateEnum `json:"approvalStatus,omitempty"`
	RevisionID     *string            `json:"revisionId,omitempty"`
}
