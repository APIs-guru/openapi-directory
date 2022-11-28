package shared

// BatchDetachObjectResponse
// Represents the output of a <a>DetachObject</a> response operation.
type BatchDetachObjectResponse struct {
	DetachedObjectIdentifier *string `json:"detachedObjectIdentifier,omitempty"`
}
