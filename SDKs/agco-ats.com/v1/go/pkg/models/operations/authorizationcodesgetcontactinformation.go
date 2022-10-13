package operations

import (
	"openapi/pkg/models/shared"
)

type AuthorizationCodesGetContactInformationPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AuthorizationCodesGetContactInformationRequest struct {
	PathParams AuthorizationCodesGetContactInformationPathParams
}

type AuthorizationCodesGetContactInformationResponse struct {
	APIModelsAPIError                                             *shared.APIModelsAPIError
	AuthorizationCodesSharedModelsAuthorizationContactInformation *shared.AuthorizationCodesSharedModelsAuthorizationContactInformation
	Body                                                          []byte
	ContentType                                                   string
	StatusCode                                                    int64
}
