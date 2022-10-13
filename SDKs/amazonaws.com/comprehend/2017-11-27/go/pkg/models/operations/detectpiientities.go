package operations

import (
	"openapi/pkg/models/shared"
)

type DetectPiiEntitiesXAmzTargetEnum string

const (
	DetectPiiEntitiesXAmzTargetEnumComprehend20171127DetectPiiEntities DetectPiiEntitiesXAmzTargetEnum = "Comprehend_20171127.DetectPiiEntities"
)

type DetectPiiEntitiesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectPiiEntitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetectPiiEntitiesRequest struct {
	Headers DetectPiiEntitiesHeaders
	Request shared.DetectPiiEntitiesRequest `request:"mediaType=application/json"`
}

type DetectPiiEntitiesResponse struct {
	ContentType                    string
	DetectPiiEntitiesResponse      *shared.DetectPiiEntitiesResponse
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
	UnsupportedLanguageException   *interface{}
}
