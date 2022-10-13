package operations

import (
	"openapi/pkg/models/shared"
)

type TagCertificateAuthorityXAmzTargetEnum string

const (
	TagCertificateAuthorityXAmzTargetEnumAcmPrivateCaTagCertificateAuthority TagCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.TagCertificateAuthority"
)

type TagCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TagCertificateAuthorityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TagCertificateAuthorityRequest struct {
	Headers TagCertificateAuthorityHeaders
	Request shared.TagCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type TagCertificateAuthorityResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	InvalidStateException     *interface{}
	InvalidTagException       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyTagsException      *interface{}
}
