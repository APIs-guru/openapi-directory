package shared

type CsrExtensions struct {
	KeyUsage                 *KeyUsage           `json:"KeyUsage"`
	SubjectInformationAccess []AccessDescription `json:"SubjectInformationAccess"`
}
