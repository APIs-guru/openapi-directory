package shared

// PolicyInformation
// Defines the X.509 <code>CertificatePolicies</code> extension.
type PolicyInformation struct {
	CertPolicyID     string                `json:"CertPolicyId"`
	PolicyQualifiers []PolicyQualifierInfo `json:"PolicyQualifiers,omitempty"`
}
