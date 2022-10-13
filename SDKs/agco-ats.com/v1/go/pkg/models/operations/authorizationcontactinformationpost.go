package operations

import (
	"openapi/pkg/models/shared"
)

type AuthorizationContactInformationPostRequests struct {
	ApplicationXML                                                 []byte                                                                `request:"mediaType=application/xml"`
	AuthorizationCodesSharedModelsAuthorizationContactInformation  *shared.AuthorizationCodesSharedModelsAuthorizationContactInformation `request:"mediaType=application/json"`
	AuthorizationCodesSharedModelsAuthorizationContactInformation1 *shared.AuthorizationCodesSharedModelsAuthorizationContactInformation `request:"mediaType=application/x-www-form-urlencoded"`
	AuthorizationCodesSharedModelsAuthorizationContactInformation2 *shared.AuthorizationCodesSharedModelsAuthorizationContactInformation `request:"mediaType=text/json"`
	TextXML                                                        []byte                                                                `request:"mediaType=text/xml"`
}

type AuthorizationContactInformationPostRequest struct {
	Request AuthorizationContactInformationPostRequests
}

type AuthorizationContactInformationPostResponse struct {
	APIModelsAPIError                                                 *shared.APIModelsAPIError
	AuthorizationContactInformationPost200ApplicationJSONInt32Integer *int32
	AuthorizationContactInformationPost200TextJSONInt32Integer        *int32
	Body                                                              []byte
	ContentType                                                       string
	StatusCode                                                        int64
}
