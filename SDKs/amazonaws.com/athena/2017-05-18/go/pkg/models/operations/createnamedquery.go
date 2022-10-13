package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNamedQueryXAmzTargetEnum string

const (
	CreateNamedQueryXAmzTargetEnumAmazonAthenaCreateNamedQuery CreateNamedQueryXAmzTargetEnum = "AmazonAthena.CreateNamedQuery"
)

type CreateNamedQueryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateNamedQueryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateNamedQueryRequest struct {
	Headers CreateNamedQueryHeaders
	Request shared.CreateNamedQueryInput `request:"mediaType=application/json"`
}

type CreateNamedQueryResponse struct {
	ContentType             string
	CreateNamedQueryOutput  *shared.CreateNamedQueryOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
