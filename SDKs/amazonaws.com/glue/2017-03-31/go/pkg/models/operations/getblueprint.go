package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlueprintXAmzTargetEnum string

const (
	GetBlueprintXAmzTargetEnumAwsGlueGetBlueprint GetBlueprintXAmzTargetEnum = "AWSGlue.GetBlueprint"
)

type GetBlueprintHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBlueprintXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetBlueprintRequest struct {
	Headers GetBlueprintHeaders
	Request shared.GetBlueprintRequest `request:"mediaType=application/json"`
}

type GetBlueprintResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetBlueprintResponse      *shared.GetBlueprintResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
