package operations

import (
	"openapi/pkg/models/shared"
)

type AuthenticationPutManageTokensPathParams struct {
	UserID int32 `pathParam:"style=simple,explode=false,name=UserID"`
}

type AuthenticationPutManageTokensRequests struct {
	APIModelsTokenOptions  *shared.APIModelsTokenOptions `request:"mediaType=application/json"`
	APIModelsTokenOptions1 *shared.APIModelsTokenOptions `request:"mediaType=application/x-www-form-urlencoded"`
	APIModelsTokenOptions2 *shared.APIModelsTokenOptions `request:"mediaType=text/json"`
	ApplicationXML         []byte                        `request:"mediaType=application/xml"`
	TextXML                []byte                        `request:"mediaType=text/xml"`
}

type AuthenticationPutManageTokensRequest struct {
	PathParams AuthenticationPutManageTokensPathParams
	Request    AuthenticationPutManageTokensRequests
}

type AuthenticationPutManageTokensResponse struct {
	ContentType string
	StatusCode  int64
}
