package operations

import (
	"openapi/pkg/models/shared"
)

type CreateExclusionsPreviewXAmzTargetEnum string

const (
	CreateExclusionsPreviewXAmzTargetEnumInspectorServiceCreateExclusionsPreview CreateExclusionsPreviewXAmzTargetEnum = "InspectorService.CreateExclusionsPreview"
)

type CreateExclusionsPreviewHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateExclusionsPreviewXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateExclusionsPreviewRequest struct {
	Headers CreateExclusionsPreviewHeaders
	Request shared.CreateExclusionsPreviewRequest `request:"mediaType=application/json"`
}

type CreateExclusionsPreviewResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateExclusionsPreviewResponse        *shared.CreateExclusionsPreviewResponse
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	PreviewGenerationInProgressException   *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
