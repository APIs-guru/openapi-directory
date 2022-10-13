package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentEc2XAmzTargetEnum string

const (
	CreateEnvironmentEc2XAmzTargetEnumAwsCloud9WorkspaceManagementServiceCreateEnvironmentEc2 CreateEnvironmentEc2XAmzTargetEnum = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2"
)

type CreateEnvironmentEc2Headers struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEnvironmentEc2XAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEnvironmentEc2Request struct {
	Headers CreateEnvironmentEc2Headers
	Request shared.CreateEnvironmentEc2Request `request:"mediaType=application/json"`
}

type CreateEnvironmentEc2Response struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateEnvironmentEc2Result   *shared.CreateEnvironmentEc2Result
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
