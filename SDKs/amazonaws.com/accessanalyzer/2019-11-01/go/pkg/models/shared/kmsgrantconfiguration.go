package shared

type KmsGrantConfiguration struct {
	Constraints       *KmsGrantConstraints    `json:"constraints"`
	GranteePrincipal  string                  `json:"granteePrincipal"`
	IssuingAccount    string                  `json:"issuingAccount"`
	Operations        []KmsGrantOperationEnum `json:"operations"`
	RetiringPrincipal *string                 `json:"retiringPrincipal"`
}
