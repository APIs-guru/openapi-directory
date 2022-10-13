package operations

import (
	"openapi/pkg/models/shared"
)

type UntagCertificateAuthorityXAmzTargetEnum string

const (
	UntagCertificateAuthorityXAmzTargetEnumAcmPrivateCaUntagCertificateAuthority UntagCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.UntagCertificateAuthority"
)

type UntagCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagCertificateAuthorityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UntagCertificateAuthorityRequest struct {
	Headers UntagCertificateAuthorityHeaders
	Request shared.UntagCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type UntagCertificateAuthorityResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	InvalidStateException     *interface{}
	InvalidTagException       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
