package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreCertificateAuthorityXAmzTargetEnum string

const (
	RestoreCertificateAuthorityXAmzTargetEnumAcmPrivateCaRestoreCertificateAuthority RestoreCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.RestoreCertificateAuthority"
)

type RestoreCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RestoreCertificateAuthorityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RestoreCertificateAuthorityRequest struct {
	Headers RestoreCertificateAuthorityHeaders
	Request shared.RestoreCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type RestoreCertificateAuthorityResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	InvalidStateException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
