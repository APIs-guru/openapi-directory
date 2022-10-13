package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBlueprintXAmzTargetEnum string

const (
	UpdateBlueprintXAmzTargetEnumAwsGlueUpdateBlueprint UpdateBlueprintXAmzTargetEnum = "AWSGlue.UpdateBlueprint"
)

type UpdateBlueprintHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateBlueprintXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateBlueprintRequest struct {
	Headers UpdateBlueprintHeaders
	Request shared.UpdateBlueprintRequest `request:"mediaType=application/json"`
}

type UpdateBlueprintResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	IllegalBlueprintStateException  *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
	UpdateBlueprintResponse         *shared.UpdateBlueprintResponse
}
