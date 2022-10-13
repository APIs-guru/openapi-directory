package shared

type ApprovalRuleOverriddenEventMetadata struct {
	OverrideStatus *OverrideStatusEnum `json:"overrideStatus"`
	RevisionID     *string             `json:"revisionId"`
}
