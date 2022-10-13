package shared

type UnprocessedIdentityID struct {
	ErrorCode  *ErrorCodeEnum `json:"ErrorCode"`
	IdentityID *string        `json:"IdentityId"`
}
