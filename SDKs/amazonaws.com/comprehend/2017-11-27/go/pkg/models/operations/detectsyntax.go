package operations

import (
	"openapi/pkg/models/shared"
)

type DetectSyntaxXAmzTargetEnum string

const (
	DetectSyntaxXAmzTargetEnumComprehend20171127DetectSyntax DetectSyntaxXAmzTargetEnum = "Comprehend_20171127.DetectSyntax"
)

type DetectSyntaxHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectSyntaxXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DetectSyntaxRequest struct {
	Headers DetectSyntaxHeaders
	Request shared.DetectSyntaxRequest `request:"mediaType=application/json"`
}

type DetectSyntaxResponse struct {
	ContentType                    string
	DetectSyntaxResponse           *shared.DetectSyntaxResponse
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
	UnsupportedLanguageException   *interface{}
}
