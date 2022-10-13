package shared

type ApprovalStateChangedEventMetadata struct {
	ApprovalStatus *ApprovalStateEnum `json:"approvalStatus"`
	RevisionID     *string            `json:"revisionId"`
}
