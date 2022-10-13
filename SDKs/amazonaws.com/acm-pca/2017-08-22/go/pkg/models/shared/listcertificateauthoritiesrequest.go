package shared

type ListCertificateAuthoritiesRequest struct {
	MaxResults    *int64             `json:"MaxResults"`
	NextToken     *string            `json:"NextToken"`
	ResourceOwner *ResourceOwnerEnum `json:"ResourceOwner"`
}
