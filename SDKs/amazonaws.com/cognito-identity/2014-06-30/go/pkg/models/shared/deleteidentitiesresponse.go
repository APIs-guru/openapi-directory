package shared

// DeleteIdentitiesResponse
// Returned in response to a successful <code>DeleteIdentities</code> operation.
type DeleteIdentitiesResponse struct {
	UnprocessedIdentityIds []UnprocessedIdentityID `json:"UnprocessedIdentityIds,omitempty"`
}
