package operations

import (
	"openapi/pkg/models/shared"
)

type ListProjectsXAmzTargetEnum string

const (
	ListProjectsXAmzTargetEnumCodeStar20170419ListProjects ListProjectsXAmzTargetEnum = "CodeStar_20170419.ListProjects"
)

type ListProjectsHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
