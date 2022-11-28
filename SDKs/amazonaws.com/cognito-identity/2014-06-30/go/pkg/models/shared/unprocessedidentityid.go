package shared

// UnprocessedIdentityID
// An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
type UnprocessedIdentityID struct {
	ErrorCode  *ErrorCodeEnum `json:"ErrorCode,omitempty"`
	IdentityID *string        `json:"IdentityId,omitempty"`
}
