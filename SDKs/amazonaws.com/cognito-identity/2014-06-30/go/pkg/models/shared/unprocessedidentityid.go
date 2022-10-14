package shared

type UnprocessedIdentityID struct {
	ErrorCode  *ErrorCodeEnum `json:"ErrorCode,omitempty"`
	IdentityID *string        `json:"IdentityId,omitempty"`
}
