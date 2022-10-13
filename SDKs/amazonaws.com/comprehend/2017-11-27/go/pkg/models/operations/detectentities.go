package operations

import (
	"openapi/pkg/models/shared"
)

type DetectEntitiesXAmzTargetEnum string

const (
	DetectEntitiesXAmzTargetEnumComprehend20171127DetectEntities DetectEntitiesXAmzTargetEnum = "Comprehend_20171127.DetectEntities"
)

type DetectEntitiesHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectEntitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetectEntitiesRequest struct {
	Headers DetectEntitiesHeaders
	Request shared.DetectEntitiesRequest `request:"mediaType=application/json"`
}

type DetectEntitiesResponse struct {
	ContentType                    string
	DetectEntitiesResponse         *shared.DetectEntitiesResponse
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	ResourceUnavailableException   *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
	UnsupportedLanguageException   *interface{}
}
