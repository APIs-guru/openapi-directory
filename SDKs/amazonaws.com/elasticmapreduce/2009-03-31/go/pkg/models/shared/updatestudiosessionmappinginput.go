package shared

type UpdateStudioSessionMappingInput struct {
	IdentityID       *string          `json:"IdentityId"`
	IdentityName     *string          `json:"IdentityName"`
	IdentityType     IdentityTypeEnum `json:"IdentityType"`
	SessionPolicyArn string           `json:"SessionPolicyArn"`
	StudioID         string           `json:"StudioId"`
}
