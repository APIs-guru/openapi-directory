package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUploadCredentialsXAmzTargetEnum string

const (
	RequestUploadCredentialsXAmzTargetEnumGameLiftRequestUploadCredentials RequestUploadCredentialsXAmzTargetEnum = "GameLift.RequestUploadCredentials"
)

type RequestUploadCredentialsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RequestUploadCredentialsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RequestUploadCredentialsRequest struct {
	Headers RequestUploadCredentialsHeaders
	Request shared.RequestUploadCredentialsInput `request:"mediaType=application/json"`
}

type RequestUploadCredentialsResponse struct {
	ContentType                    string
	InternalServiceException       *interface{}
	InvalidRequestException        *interface{}
	NotFoundException              *interface{}
	RequestUploadCredentialsOutput *shared.RequestUploadCredentialsOutput
	StatusCode                     int64
	UnauthorizedException          *interface{}
}
