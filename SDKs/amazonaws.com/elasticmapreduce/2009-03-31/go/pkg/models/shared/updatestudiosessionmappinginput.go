package shared



type UpdateStudioSessionMappingInput struct {
    IdentityID *string `json:"IdentityId,omitempty"`
    IdentityName *string `json:"IdentityName,omitempty"`
    IdentityType IdentityTypeEnum `json:"IdentityType"`
    SessionPolicyArn string `json:"SessionPolicyArn"`
    StudioID string `json:"StudioId"`
    
}

