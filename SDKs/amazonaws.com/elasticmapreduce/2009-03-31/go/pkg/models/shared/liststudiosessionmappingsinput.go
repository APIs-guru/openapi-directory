package shared

type ListStudioSessionMappingsInput struct {
	IdentityType *IdentityTypeEnum `json:"IdentityType"`
	Marker       *string           `json:"Marker"`
	StudioID     *string           `json:"StudioId"`
}
