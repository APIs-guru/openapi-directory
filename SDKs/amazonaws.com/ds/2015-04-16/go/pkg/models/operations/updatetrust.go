package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTrustXAmzTargetEnum string

const (
	UpdateTrustXAmzTargetEnumDirectoryService20150416UpdateTrust UpdateTrustXAmzTargetEnum = "DirectoryService_20150416.UpdateTrust"
)

type UpdateTrustHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTrustXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTrustRequest struct {
	Headers UpdateTrustHeaders
	Request shared.UpdateTrustRequest `request:"mediaType=application/json"`
}

type UpdateTrustResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	InvalidParameterException   *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
	UpdateTrustResult           *shared.UpdateTrustResult
}
