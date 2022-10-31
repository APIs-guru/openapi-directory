package shared



type CreateDelegationRequest struct {
    Comment *string `json:"comment,omitempty"`
    ControlSetID *string `json:"controlSetId,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    RoleType *RoleTypeEnum `json:"roleType,omitempty"`
    
}

