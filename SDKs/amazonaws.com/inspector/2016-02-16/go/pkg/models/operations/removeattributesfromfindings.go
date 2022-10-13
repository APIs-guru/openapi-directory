package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAttributesFromFindingsXAmzTargetEnum string

const (
	RemoveAttributesFromFindingsXAmzTargetEnumInspectorServiceRemoveAttributesFromFindings RemoveAttributesFromFindingsXAmzTargetEnum = "InspectorService.RemoveAttributesFromFindings"
)

type RemoveAttributesFromFindingsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveAttributesFromFindingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveAttributesFromFindingsRequest struct {
	Headers RemoveAttributesFromFindingsHeaders
	Request shared.RemoveAttributesFromFindingsRequest `request:"mediaType=application/json"`
}

type RemoveAttributesFromFindingsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	RemoveAttributesFromFindingsResponse   *shared.RemoveAttributesFromFindingsResponse
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
