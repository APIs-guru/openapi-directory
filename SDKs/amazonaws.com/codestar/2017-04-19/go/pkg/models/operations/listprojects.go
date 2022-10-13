package operations

import (
	"openapi/pkg/models/shared"
)

type ListProjectsXAmzTargetEnum string

const (
	ListProjectsXAmzTargetEnumCodeStar20170419ListProjects ListProjectsXAmzTargetEnum = "CodeStar_20170419.ListProjects"
)

type ListProjectsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProjectsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListProjectsRequest struct {
	Headers ListProjectsHeaders
	Request shared.ListProjectsRequest `request:"mediaType=application/json"`
}

type ListProjectsResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListProjectsResult        *shared.ListProjectsResult
	StatusCode                int64
	ValidationException       *interface{}
}
