package shared

// ListPublicKeysResponse
// Returns the objects or data listed below if successful. Otherwise, returns an error.
type ListPublicKeysResponse struct {
	NextToken     *string     `json:"NextToken,omitempty"`
	PublicKeyList []PublicKey `json:"PublicKeyList,omitempty"`
}
