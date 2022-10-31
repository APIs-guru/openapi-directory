package operations

import (
	"openapi/pkg/models/shared"
)

type RequestCertificateXAmzTargetEnum string

const (
	RequestCertificateXAmzTargetEnumCertificateManagerRequestCertificate RequestCertificateXAmzTargetEnum = "CertificateManager.RequestCertificate"
)

type RequestCertificateHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RequestCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RequestCertificateRequest struct {
	Headers RequestCertificateHeaders
	Request shared.RequestCertificateRequest `request:"mediaType=application/json"`
}

type RequestCertificateResponse struct {
	ContentType                             string
	InvalidArnException                     *interface{}
	InvalidDomainValidationOptionsException *interface{}
	InvalidParameterException               *interface{}
	InvalidTagException                     *interface{}
	LimitExceededException                  *interface{}
	RequestCertificateResponse              *shared.RequestCertificateResponse
	StatusCode                              int64
	TagPolicyException                      *interface{}
	TooManyTagsException                    *interface{}
}
