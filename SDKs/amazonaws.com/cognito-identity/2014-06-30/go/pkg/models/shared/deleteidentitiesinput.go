package shared

// DeleteIdentitiesInput
// Input to the <code>DeleteIdentities</code> action.
type DeleteIdentitiesInput struct {
	IdentityIdsToDelete []string `json:"IdentityIdsToDelete"`
}
