package shared



type ApprovalStateChangedEventMetadata struct {
    ApprovalStatus *ApprovalStateEnum `json:"approvalStatus,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    
}

