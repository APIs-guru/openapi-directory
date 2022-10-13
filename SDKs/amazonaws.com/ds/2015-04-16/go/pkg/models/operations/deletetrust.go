package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTrustXAmzTargetEnum string

const (
	DeleteTrustXAmzTargetEnumDirectoryService20150416DeleteTrust DeleteTrustXAmzTargetEnum = "DirectoryService_20150416.DeleteTrust"
)

type DeleteTrustHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTrustXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTrustRequest struct {
	Headers DeleteTrustHeaders
	Request shared.DeleteTrustRequest `request:"mediaType=application/json"`
}

type DeleteTrustResponse struct {
	ClientException               *interface{}
	ContentType                   string
	DeleteTrustResult             *shared.DeleteTrustResult
	EntityDoesNotExistException   *interface{}
	InvalidParameterException     *interface{}
	ServiceException              *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}
