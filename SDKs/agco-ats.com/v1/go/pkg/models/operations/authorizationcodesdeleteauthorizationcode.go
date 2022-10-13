package operations

type AuthorizationCodesDeleteAuthorizationCodePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AuthorizationCodesDeleteAuthorizationCodeRequest struct {
	PathParams AuthorizationCodesDeleteAuthorizationCodePathParams
}

type AuthorizationCodesDeleteAuthorizationCodeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
