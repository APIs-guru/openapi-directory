package operations

import (
	"openapi/pkg/models/shared"
)

type GetSigningCertificateXAmzTargetEnum string

const (
	GetSigningCertificateXAmzTargetEnumAwsCognitoIdentityProviderServiceGetSigningCertificate GetSigningCertificateXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetSigningCertificate"
)

type GetSigningCertificateHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSigningCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSigningCertificateRequest struct {
	Headers GetSigningCertificateHeaders
	Request shared.GetSigningCertificateRequest `request:"mediaType=application/json"`
}

type GetSigningCertificateResponse struct {
	ContentType                   string
	GetSigningCertificateResponse *shared.GetSigningCertificateResponse
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
