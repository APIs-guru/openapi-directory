package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUploadCredentialsXAmzTargetEnum string

const (
	RequestUploadCredentialsXAmzTargetEnumGameLiftRequestUploadCredentials RequestUploadCredentialsXAmzTargetEnum = "GameLift.RequestUploadCredentials"
)

type RequestUploadCredentialsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RequestUploadCredentialsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
