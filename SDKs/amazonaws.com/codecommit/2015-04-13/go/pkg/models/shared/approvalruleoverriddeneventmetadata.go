package shared

// ApprovalRuleOverriddenEventMetadata
// Returns information about an override event for approval rules for a pull request.
type ApprovalRuleOverriddenEventMetadata struct {
	OverrideStatus *OverrideStatusEnum `json:"overrideStatus,omitempty"`
	RevisionID     *string             `json:"revisionId,omitempty"`
}
