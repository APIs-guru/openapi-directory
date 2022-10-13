package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBlueprintXAmzTargetEnum string

const (
	CreateBlueprintXAmzTargetEnumAwsGlueCreateBlueprint CreateBlueprintXAmzTargetEnum = "AWSGlue.CreateBlueprint"
)

type CreateBlueprintHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBlueprintXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateBlueprintRequest struct {
	Headers CreateBlueprintHeaders
	Request shared.CreateBlueprintRequest `request:"mediaType=application/json"`
}

type CreateBlueprintResponse struct {
	AlreadyExistsException               *interface{}
	ContentType                          string
	CreateBlueprintResponse              *shared.CreateBlueprintResponse
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
