package shared

type ListCertificateAuthoritiesResponse struct {
	CertificateAuthorities []CertificateAuthority `json:"CertificateAuthorities"`
	NextToken              *string                `json:"NextToken"`
}
