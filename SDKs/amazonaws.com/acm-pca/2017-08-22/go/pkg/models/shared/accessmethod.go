package shared

type AccessMethod struct {
	AccessMethodType       *AccessMethodTypeEnum `json:"AccessMethodType"`
	CustomObjectIdentifier *string               `json:"CustomObjectIdentifier"`
}
