package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCertificateAuthorityXAmzTargetEnum string

const (
	DeleteCertificateAuthorityXAmzTargetEnumAcmPrivateCaDeleteCertificateAuthority DeleteCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.DeleteCertificateAuthority"
)

type DeleteCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCertificateAuthorityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteCertificateAuthorityRequest struct {
	Headers DeleteCertificateAuthorityHeaders
	Request shared.DeleteCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type DeleteCertificateAuthorityResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArnException             *interface{}
	InvalidStateException           *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
