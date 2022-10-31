package operations

import (
	"openapi/pkg/models/shared"
)

type AuthenticationRequestPasswordResetRequests struct {
	APIModelsPasswordResetRequest  *shared.APIModelsPasswordResetRequest `request:"mediaType=application/json"`
	APIModelsPasswordResetRequest1 *shared.APIModelsPasswordResetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	APIModelsPasswordResetRequest2 *shared.APIModelsPasswordResetRequest `request:"mediaType=text/json"`
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
}

type AuthenticationRequestPasswordResetRequest struct {
	Request AuthenticationRequestPasswordResetRequests
}

type AuthenticationRequestPasswordResetResponse struct {
	ContentType string
	StatusCode  int64
}
