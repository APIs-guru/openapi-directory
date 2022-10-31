package shared

type PolicyInformation struct {
	CertPolicyID     string                `json:"CertPolicyId"`
	PolicyQualifiers []PolicyQualifierInfo `json:"PolicyQualifiers,omitempty"`
}
