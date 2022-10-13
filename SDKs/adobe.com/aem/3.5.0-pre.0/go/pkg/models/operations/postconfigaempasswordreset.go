package operations

type PostConfigAemPasswordResetQueryParams struct {
	PwdresetAuthorizables           []string `queryParam:"style=form,explode=true,name=pwdreset.authorizables"`
	PwdresetAuthorizablesAtTypeHint *string  `queryParam:"style=form,explode=true,name=pwdreset.authorizables@TypeHint"`
}

type PostConfigAemPasswordResetRequest struct {
	QueryParams PostConfigAemPasswordResetQueryParams
}

type PostConfigAemPasswordResetResponse struct {
	ContentType string
	StatusCode  int64
}
