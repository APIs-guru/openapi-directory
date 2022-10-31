package operations

import (
	"openapi/pkg/models/shared"
)

type CancelImageCreationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CancelImageCreationRequestBody struct {
	ClientToken          string `json:"clientToken"`
	ImageBuildVersionArn string `json:"imageBuildVersionArn"`
}

type CancelImageCreationRequest struct {
	Headers CancelImageCreationHeaders
	Request CancelImageCreationRequestBody `request:"mediaType=application/json"`
}

type CancelImageCreationResponse struct {
	CallRateLimitExceededException       *interface{}
	CancelImageCreationResponse          *shared.CancelImageCreationResponse
	ClientException                      *interface{}
	ContentType                          string
	ForbiddenException                   *interface{}
	IdempotentParameterMismatchException *interface{}
	InvalidRequestException              *interface{}
	ResourceInUseException               *interface{}
	ServiceException                     *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
}
