package shared

type GetVaultLockOutput struct {
	CreationDate   *string `json:"CreationDate"`
	ExpirationDate *string `json:"ExpirationDate"`
	Policy         *string `json:"Policy"`
	State          *string `json:"State"`
}
