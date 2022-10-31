package operations

import (
	"openapi/pkg/models/shared"
)

type DetectDominantLanguageXAmzTargetEnum string

const (
	DetectDominantLanguageXAmzTargetEnumComprehend20171127DetectDominantLanguage DetectDominantLanguageXAmzTargetEnum = "Comprehend_20171127.DetectDominantLanguage"
)

type DetectDominantLanguageHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectDominantLanguageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DetectDominantLanguageRequest struct {
	Headers DetectDominantLanguageHeaders
	Request shared.DetectDominantLanguageRequest `request:"mediaType=application/json"`
}

type DetectDominantLanguageResponse struct {
	ContentType                    string
	DetectDominantLanguageResponse *shared.DetectDominantLanguageResponse
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
}
