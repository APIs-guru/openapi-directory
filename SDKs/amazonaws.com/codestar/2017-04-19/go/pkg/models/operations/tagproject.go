package operations

import (
	"openapi/pkg/models/shared"
)

type TagProjectXAmzTargetEnum string

const (
	TagProjectXAmzTargetEnumCodeStar20170419TagProject TagProjectXAmzTargetEnum = "CodeStar_20170419.TagProject"
)

type TagProjectHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TagProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type TagProjectRequest struct {
	Headers TagProjectHeaders
	Request shared.TagProjectRequest `request:"mediaType=application/json"`
}

type TagProjectResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	LimitExceededException          *interface{}
	ProjectNotFoundException        *interface{}
	StatusCode                      int64
	TagProjectResult                *shared.TagProjectResult
	ValidationException             *interface{}
}
