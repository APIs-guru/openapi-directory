package operations

import (
	"openapi/pkg/models/shared"
)

type UntagProjectXAmzTargetEnum string

const (
	UntagProjectXAmzTargetEnumCodeStar20170419UntagProject UntagProjectXAmzTargetEnum = "CodeStar_20170419.UntagProject"
)

type UntagProjectHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UntagProjectRequest struct {
	Headers UntagProjectHeaders
	Request shared.UntagProjectRequest `request:"mediaType=application/json"`
}

type UntagProjectResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	LimitExceededException          *interface{}
	ProjectNotFoundException        *interface{}
	StatusCode                      int64
	UntagProjectResult              map[string]interface{}
	ValidationException             *interface{}
}
