package operations

import (
	"openapi/pkg/models/shared"
)

type AddAttributesToFindingsXAmzTargetEnum string

const (
	AddAttributesToFindingsXAmzTargetEnumInspectorServiceAddAttributesToFindings AddAttributesToFindingsXAmzTargetEnum = "InspectorService.AddAttributesToFindings"
)

type AddAttributesToFindingsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddAttributesToFindingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
