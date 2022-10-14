package shared

type AccessMethod struct {
	AccessMethodType       *AccessMethodTypeEnum `json:"AccessMethodType,omitempty"`
	CustomObjectIdentifier *string               `json:"CustomObjectIdentifier,omitempty"`
}
