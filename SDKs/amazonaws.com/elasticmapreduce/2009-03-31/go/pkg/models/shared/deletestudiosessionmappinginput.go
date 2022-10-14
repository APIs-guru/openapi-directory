package shared

type DeleteStudioSessionMappingInput struct {
	IdentityID   *string          `json:"IdentityId,omitempty"`
	IdentityName *string          `json:"IdentityName,omitempty"`
	IdentityType IdentityTypeEnum `json:"IdentityType"`
	StudioID     string           `json:"StudioId"`
}
