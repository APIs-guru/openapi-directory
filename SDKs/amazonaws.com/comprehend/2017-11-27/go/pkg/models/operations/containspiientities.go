package operations

import (
	"openapi/pkg/models/shared"
)

type ContainsPiiEntitiesXAmzTargetEnum string

const (
	ContainsPiiEntitiesXAmzTargetEnumComprehend20171127ContainsPiiEntities ContainsPiiEntitiesXAmzTargetEnum = "Comprehend_20171127.ContainsPiiEntities"
)

type ContainsPiiEntitiesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ContainsPiiEntitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ContainsPiiEntitiesRequest struct {
	Headers ContainsPiiEntitiesHeaders
	Request shared.ContainsPiiEntitiesRequest `request:"mediaType=application/json"`
}

type ContainsPiiEntitiesResponse struct {
	ContainsPiiEntitiesResponse    *shared.ContainsPiiEntitiesResponse
	ContentType                    string
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
	UnsupportedLanguageException   *interface{}
}
