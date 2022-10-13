package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationS3XAmzTargetEnum string

const (
	CreateLocationS3XAmzTargetEnumFmrsServiceCreateLocationS3 CreateLocationS3XAmzTargetEnum = "FmrsService.CreateLocationS3"
)

type CreateLocationS3Headers struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLocationS3XAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLocationS3Request struct {
	Headers CreateLocationS3Headers
	Request shared.CreateLocationS3Request `request:"mediaType=application/json"`
}

type CreateLocationS3Response struct {
	ContentType              string
	CreateLocationS3Response *shared.CreateLocationS3Response
	InternalException        *interface{}
	InvalidRequestException  *interface{}
	StatusCode               int64
}
