package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeCertificateXAmzTargetEnum string

const (
	RevokeCertificateXAmzTargetEnumAcmPrivateCaRevokeCertificate RevokeCertificateXAmzTargetEnum = "ACMPrivateCA.RevokeCertificate"
)

type RevokeCertificateHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RevokeCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RevokeCertificateRequest struct {
	Headers RevokeCertificateHeaders
	Request shared.RevokeCertificateRequest `request:"mediaType=application/json"`
}

type RevokeCertificateResponse struct {
	ConcurrentModificationException  *interface{}
	ContentType                      string
	InvalidArnException              *interface{}
	InvalidRequestException          *interface{}
	InvalidStateException            *interface{}
	LimitExceededException           *interface{}
	RequestAlreadyProcessedException *interface{}
	RequestFailedException           *interface{}
	RequestInProgressException       *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
