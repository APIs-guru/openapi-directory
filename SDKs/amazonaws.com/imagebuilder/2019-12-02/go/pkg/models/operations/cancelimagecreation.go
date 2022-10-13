package operations

import (
	"openapi/pkg/models/shared"
)

type CancelImageCreationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
