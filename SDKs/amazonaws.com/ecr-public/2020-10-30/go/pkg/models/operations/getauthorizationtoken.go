package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthorizationTokenXAmzTargetEnum string

const (
	GetAuthorizationTokenXAmzTargetEnumSpencerFrontendServiceGetAuthorizationToken GetAuthorizationTokenXAmzTargetEnum = "SpencerFrontendService.GetAuthorizationToken"
)

type GetAuthorizationTokenHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAuthorizationTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAuthorizationTokenRequest struct {
	Headers GetAuthorizationTokenHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetAuthorizationTokenResponse struct {
	ContentType                   string
	GetAuthorizationTokenResponse *shared.GetAuthorizationTokenResponse
	InvalidParameterException     *interface{}
	ServerException               *interface{}
	StatusCode                    int64
}
