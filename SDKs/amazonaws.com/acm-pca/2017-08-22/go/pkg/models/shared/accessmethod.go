package shared

// AccessMethod
// Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.
type AccessMethod struct {
	AccessMethodType       *AccessMethodTypeEnum `json:"AccessMethodType,omitempty"`
	CustomObjectIdentifier *string               `json:"CustomObjectIdentifier,omitempty"`
}
