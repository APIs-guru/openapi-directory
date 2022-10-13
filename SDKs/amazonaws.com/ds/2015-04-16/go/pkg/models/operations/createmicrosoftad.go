package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMicrosoftAdxAmzTargetEnum string

const (
	CreateMicrosoftAdxAmzTargetEnumDirectoryService20150416CreateMicrosoftAd CreateMicrosoftAdxAmzTargetEnum = "DirectoryService_20150416.CreateMicrosoftAD"
)

type CreateMicrosoftAdHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateMicrosoftAdxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateMicrosoftAdRequest struct {
	Headers CreateMicrosoftAdHeaders
	Request shared.CreateMicrosoftAdRequest `request:"mediaType=application/json"`
}

type CreateMicrosoftAdResponse struct {
	ClientException                 *interface{}
	ContentType                     string
	CreateMicrosoftAdResult         *shared.CreateMicrosoftAdResult
	DirectoryLimitExceededException *interface{}
	InvalidParameterException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnsupportedOperationException   *interface{}
}
