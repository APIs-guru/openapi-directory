package operations

import (
	"openapi/pkg/models/shared"
)

type ListCertificatesXAmzTargetEnum string

const (
	ListCertificatesXAmzTargetEnumDirectoryService20150416ListCertificates ListCertificatesXAmzTargetEnum = "DirectoryService_20150416.ListCertificates"
)

type ListCertificatesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCertificatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCertificatesRequest struct {
	Headers ListCertificatesHeaders
	Request shared.ListCertificatesRequest `request:"mediaType=application/json"`
}

type ListCertificatesResponse struct {
	ClientException                *interface{}
	ContentType                    string
	DirectoryDoesNotExistException *interface{}
	InvalidNextTokenException      *interface{}
	InvalidParameterException      *interface{}
	ListCertificatesResult         *shared.ListCertificatesResult
	ServiceException               *interface{}
	StatusCode                     int64
	UnsupportedOperationException  *interface{}
}
