package shared

type ListStudioSessionMappingsInput struct {
	IdentityType *IdentityTypeEnum `json:"IdentityType,omitempty"`
	Marker       *string           `json:"Marker,omitempty"`
	StudioID     *string           `json:"StudioId,omitempty"`
}
