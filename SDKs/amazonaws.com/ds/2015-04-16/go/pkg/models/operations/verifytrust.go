package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyTrustXAmzTargetEnum string

const (
	VerifyTrustXAmzTargetEnumDirectoryService20150416VerifyTrust VerifyTrustXAmzTargetEnum = "DirectoryService_20150416.VerifyTrust"
)

type VerifyTrustHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        VerifyTrustXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type VerifyTrustRequest struct {
	Headers VerifyTrustHeaders
	Request shared.VerifyTrustRequest `request:"mediaType=application/json"`
}

type VerifyTrustResponse struct {
	ClientException               *interface{}
	ContentType                   string
	EntityDoesNotExistException   *interface{}
	InvalidParameterException     *interface{}
	ServiceException              *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
	VerifyTrustResult             *shared.VerifyTrustResult
}
