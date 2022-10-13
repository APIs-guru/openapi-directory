package shared

type DeleteStudioSessionMappingInput struct {
	IdentityID   *string          `json:"IdentityId"`
	IdentityName *string          `json:"IdentityName"`
	IdentityType IdentityTypeEnum `json:"IdentityType"`
	StudioID     string           `json:"StudioId"`
}
