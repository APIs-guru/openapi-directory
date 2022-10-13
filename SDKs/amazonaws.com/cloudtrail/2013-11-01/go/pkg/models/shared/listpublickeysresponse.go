package shared

type ListPublicKeysResponse struct {
	NextToken     *string     `json:"NextToken"`
	PublicKeyList []PublicKey `json:"PublicKeyList"`
}
