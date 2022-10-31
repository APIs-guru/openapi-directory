package operations

import (
	"openapi/pkg/models/shared"
)

type AuthorizationCodesGetAuthorizationCodePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AuthorizationCodesGetAuthorizationCodeRequest struct {
	PathParams AuthorizationCodesGetAuthorizationCodePathParams
}

type AuthorizationCodesGetAuthorizationCodeResponse struct {
	APIModelsAPIError                               *shared.APIModelsAPIError
	AuthorizationCodesSharedModelsAuthorizationCode *shared.AuthorizationCodesSharedModelsAuthorizationCode
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
}
