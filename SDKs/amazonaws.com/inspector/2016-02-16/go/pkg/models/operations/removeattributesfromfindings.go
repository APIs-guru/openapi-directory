package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAttributesFromFindingsXAmzTargetEnum string

const (
	RemoveAttributesFromFindingsXAmzTargetEnumInspectorServiceRemoveAttributesFromFindings RemoveAttributesFromFindingsXAmzTargetEnum = "InspectorService.RemoveAttributesFromFindings"
)

type RemoveAttributesFromFindingsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveAttributesFromFindingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
