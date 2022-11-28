package shared

// KmsGrantConfiguration
// A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.
type KmsGrantConfiguration struct {
	Constraints       *KmsGrantConstraints    `json:"constraints,omitempty"`
	GranteePrincipal  string                  `json:"granteePrincipal"`
	IssuingAccount    string                  `json:"issuingAccount"`
	Operations        []KmsGrantOperationEnum `json:"operations"`
	RetiringPrincipal *string                 `json:"retiringPrincipal,omitempty"`
}
