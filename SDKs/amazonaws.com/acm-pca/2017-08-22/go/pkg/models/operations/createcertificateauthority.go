package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCertificateAuthorityXAmzTargetEnum string

const (
	CreateCertificateAuthorityXAmzTargetEnumAcmPrivateCaCreateCertificateAuthority CreateCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.CreateCertificateAuthority"
)

type CreateCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCertificateAuthorityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCertificateAuthorityRequest struct {
	Headers CreateCertificateAuthorityHeaders
	Request shared.CreateCertificateAuthorityRequest `request:"mediaType=application/json"`
}

type CreateCertificateAuthorityResponse struct {
	ContentType                        string
	CreateCertificateAuthorityResponse *shared.CreateCertificateAuthorityResponse
	InvalidArgsException               *interface{}
	InvalidPolicyException             *interface{}
	InvalidTagException                *interface{}
	LimitExceededException             *interface{}
	StatusCode                         int64
}
