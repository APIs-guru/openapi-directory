package shared

type CsrExtensions struct {
	KeyUsage                 *KeyUsage           `json:"KeyUsage,omitempty"`
	SubjectInformationAccess []AccessDescription `json:"SubjectInformationAccess,omitempty"`
}
