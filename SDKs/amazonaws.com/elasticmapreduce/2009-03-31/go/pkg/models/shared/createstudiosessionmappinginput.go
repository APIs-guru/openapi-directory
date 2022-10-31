package shared



type CreateStudioSessionMappingInput struct {
    IdentityID *string `json:"IdentityId,omitempty"`
    IdentityName *string `json:"IdentityName,omitempty"`
    IdentityType IdentityTypeEnum `json:"IdentityType"`
    SessionPolicyArn string `json:"SessionPolicyArn"`
    StudioID string `json:"StudioId"`
    
}

