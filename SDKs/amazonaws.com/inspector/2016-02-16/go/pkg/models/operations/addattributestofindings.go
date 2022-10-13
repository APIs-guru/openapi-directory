package operations

import (
	"openapi/pkg/models/shared"
)

type AddAttributesToFindingsXAmzTargetEnum string

const (
	AddAttributesToFindingsXAmzTargetEnumInspectorServiceAddAttributesToFindings AddAttributesToFindingsXAmzTargetEnum = "InspectorService.AddAttributesToFindings"
)

type AddAttributesToFindingsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddAttributesToFindingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddAttributesToFindingsRequest struct {
	Headers AddAttributesToFindingsHeaders
	Request shared.AddAttributesToFindingsRequest `request:"mediaType=application/json"`
}

type AddAttributesToFindingsResponse struct {
	AccessDeniedException                  *interface{}
	AddAttributesToFindingsResponse        *shared.AddAttributesToFindingsResponse
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
