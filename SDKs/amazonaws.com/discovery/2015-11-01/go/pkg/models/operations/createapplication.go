package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationXAmzTargetEnum string

const (
	CreateApplicationXAmzTargetEnumAwsPoseidonServiceV20151101CreateApplication CreateApplicationXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.CreateApplication"
)

type CreateApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateApplicationRequest struct {
	Headers CreateApplicationHeaders
	Request shared.CreateApplicationRequest `request:"mediaType=application/json"`
}

type CreateApplicationResponse struct {
	AuthorizationErrorException    *interface{}
	ContentType                    string
	CreateApplicationResponse      *shared.CreateApplicationResponse
	HomeRegionNotSetException      *interface{}
	InvalidParameterException      *interface{}
	InvalidParameterValueException *interface{}
	ServerInternalErrorException   *interface{}
	StatusCode                     int64
}
